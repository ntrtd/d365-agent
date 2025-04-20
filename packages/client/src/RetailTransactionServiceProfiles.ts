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
import type { RetailTransactionServiceProfilesApi } from './RetailTransactionServiceProfilesApi';
import { NoYes } from './NoYes';
import { RetailProfileVersion } from './RetailProfileVersion';
import { RetailTransactionServiceProtocolType } from './RetailTransactionServiceProtocolType';
import { OnlineChannelV2S, OnlineChannelV2SType } from './OnlineChannelV2S';
import { RetailCallCenters, RetailCallCentersType } from './RetailCallCenters';
import { OnlineChannels, OnlineChannelsType } from './OnlineChannels';
import { RetailStores, RetailStoresType } from './RetailStores';

/**
 * This class represents the entity "RetailTransactionServiceProfiles" of service "d365_metadata".
 */
export class RetailTransactionServiceProfiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionServiceProfilesType<T>
{
  /**
   * Technical entity name for RetailTransactionServiceProfiles.
   */
  static override _entityName = 'RetailTransactionServiceProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionServiceProfiles entity.
   */
  static _keys = ['ProfileId'];
  /**
   * Profile Id.
   */
  declare profileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transfer File Chunk Size.
   */
  declare transferFileChunkSize: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Retail Ts Data.
   * @nullable
   */
  declare retailTsData?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Central Table Server Port.
   * @nullable
   */
  declare centralTableServerPort?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Security Off.
   * @nullable
   */
  declare securityOff?: NoYes | null;
  /**
   * Ts Version.
   * @nullable
   */
  declare tsVersion?: RetailProfileVersion | null;
  /**
   * Protocol.
   * @nullable
   */
  declare protocol?: RetailTransactionServiceProtocolType | null;
  /**
   * Server Service Name.
   * @nullable
   */
  declare serverServiceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Audience Urn.
   * @nullable
   */
  declare audienceUrn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Host Url.
   * @nullable
   */
  declare serviceHostUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Server Certificate Dns.
   * @nullable
   */
  declare serverCertificateDns?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Identity Provider Claim Type.
   * @nullable
   */
  declare identityProviderClaimType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language.
   * @nullable
   */
  declare language?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Aos Url.
   * @nullable
   */
  declare aosUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Identity Provider.
   * @nullable
   */
  declare identityProvider?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Issuer Uri.
   * @nullable
   */
  declare issuerUri?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pos Ts Password.
   * @nullable
   */
  declare posTsPassword?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Issued Token Type.
   * @nullable
   */
  declare issuedTokenType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Id.
   * @nullable
   */
  declare userId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ts Staff.
   * @nullable
   */
  declare tsStaff?: NoYes | null;
  /**
   * Central Table Server.
   * @nullable
   */
  declare centralTableServer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Report Execution Timeout.
   */
  declare reportExecutionTimeout: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link OnlineChannelV2S} entity.
   */
  declare onlineChannelV2: OnlineChannelV2S<T>[];
  /**
   * One-to-many navigation property to the {@link RetailCallCenters} entity.
   */
  declare retailCallCenter: RetailCallCenters<T>[];
  /**
   * One-to-many navigation property to the {@link OnlineChannels} entity.
   */
  declare onlineChannel: OnlineChannels<T>[];
  /**
   * One-to-many navigation property to the {@link RetailStores} entity.
   */
  declare retailStore: RetailStores<T>[];

  constructor(_entityApi: RetailTransactionServiceProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionServiceProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  profileId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  transferFileChunkSize: DeserializedType<T, 'Edm.Int32'>;
  retailTsData?: DeserializedType<T, 'Edm.String'> | null;
  centralTableServerPort?: DeserializedType<T, 'Edm.String'> | null;
  securityOff?: NoYes | null;
  tsVersion?: RetailProfileVersion | null;
  protocol?: RetailTransactionServiceProtocolType | null;
  serverServiceName?: DeserializedType<T, 'Edm.String'> | null;
  audienceUrn?: DeserializedType<T, 'Edm.String'> | null;
  serviceHostUrl?: DeserializedType<T, 'Edm.String'> | null;
  serverCertificateDns?: DeserializedType<T, 'Edm.String'> | null;
  identityProviderClaimType?: DeserializedType<T, 'Edm.String'> | null;
  language?: DeserializedType<T, 'Edm.String'> | null;
  aosUrl?: DeserializedType<T, 'Edm.String'> | null;
  identityProvider?: DeserializedType<T, 'Edm.String'> | null;
  issuerUri?: DeserializedType<T, 'Edm.String'> | null;
  posTsPassword?: DeserializedType<T, 'Edm.String'> | null;
  issuedTokenType?: DeserializedType<T, 'Edm.String'> | null;
  userId?: DeserializedType<T, 'Edm.String'> | null;
  tsStaff?: NoYes | null;
  centralTableServer?: DeserializedType<T, 'Edm.String'> | null;
  reportExecutionTimeout: DeserializedType<T, 'Edm.Int32'>;
  onlineChannelV2: OnlineChannelV2SType<T>[];
  retailCallCenter: RetailCallCentersType<T>[];
  onlineChannel: OnlineChannelsType<T>[];
  retailStore: RetailStoresType<T>[];
}
