/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { EmailParametersApi } from './EmailParametersApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "EmailParameters" of service "d365_metadata".
 */
export class EmailParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmailParametersType<T>
{
  /**
   * Technical entity name for EmailParameters.
   */
  static override _entityName = 'EmailParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EmailParameters entity.
   */
  static _keys = ['ID'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Smtp Port Number.
   */
  declare smtpPortNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Mailer Interactive Enabled.
   * @nullable
   */
  declare mailerInteractiveEnabled?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Smtp Require Ssl.
   * @nullable
   */
  declare smtpRequireSsl?: NoYes | null;
  /**
   * Mailer Non Interactive.
   * @nullable
   */
  declare mailerNonInteractive?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Smtp Use Ntlm.
   * @nullable
   */
  declare smtpUseNtlm?: NoYes | null;
  /**
   * Smtp Relay Server Name.
   * @nullable
   */
  declare smtpRelayServerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maximum Email Attachment Size.
   */
  declare maximumEmailAttachmentSize: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Smtp User Name.
   * @nullable
   */
  declare smtpUserName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EmailParametersApi<T>) {
    super(_entityApi);
  }
}

export interface EmailParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Int32'>;
  smtpPortNumber: DeserializedType<T, 'Edm.Int32'>;
  mailerInteractiveEnabled?: DeserializedType<T, 'Edm.Binary'> | null;
  smtpRequireSsl?: NoYes | null;
  mailerNonInteractive?: DeserializedType<T, 'Edm.String'> | null;
  smtpUseNtlm?: NoYes | null;
  smtpRelayServerName?: DeserializedType<T, 'Edm.String'> | null;
  maximumEmailAttachmentSize: DeserializedType<T, 'Edm.Int32'>;
  smtpUserName?: DeserializedType<T, 'Edm.String'> | null;
}
