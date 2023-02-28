import { Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { CameraOutlined } from '@ant-design/icons';
import { UserSelector } from '@modules/authentication/profileStore';
import { imgAvatar } from '@shared/assets/images';

interface IAvatar {
  disabled?: boolean;
  chooseFile: (file: any) => void;
}
const AvatarUser: React.FC<IAvatar> = props => {
  const { disabled, chooseFile } = props;
  const [imgUrl, setImgUrl] = useState<any>(null);
  const { user } = useSelector(UserSelector);

  useEffect(() => {
    if (disabled) {
      setImgUrl(user?.avatar);
    }
  }, [user, disabled]);

  return (
    <div className="avatar__box">
      <div className="avatar__wrapper">
        <img
          alt="avatar"
          className="img-avatar"
          src={
            imgUrl
              ? imgUrl === null || typeof imgUrl === 'string'
                ? imgUrl
                : URL.createObjectURL(imgUrl)
              : imgAvatar
          }
        />
        <Form.Item name="avatar" hidden={true}>
          <Input hidden={true} />
        </Form.Item>
        {disabled !== true && (
          <div className="button-icon-upload">
            <label htmlFor="input-media">
              <CameraOutlined hidden={disabled} />
            </label>
            <input
              hidden
              onChange={e => {
                const media: any = e.target.files ? e.target.files[0] : null;
                setImgUrl(media);
                chooseFile(media);
              }}
              disabled={disabled}
              type="file"
              id="input-media"
              accept="image/png, image/jpeg, image/jpg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(AvatarUser);
