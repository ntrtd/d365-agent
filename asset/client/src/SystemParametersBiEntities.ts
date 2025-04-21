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
import type { SystemParametersBiEntitiesApi } from './SystemParametersBiEntitiesApi';
import { NoYes } from './NoYes';
import { DimensionLedgerAccountDelimiter } from './DimensionLedgerAccountDelimiter';

/**
 * This class represents the entity "SystemParametersBiEntities" of service "d365_metadata".
 */
export class SystemParametersBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SystemParametersBiEntitiesType<T>
{
  /**
   * Technical entity name for SystemParametersBiEntities.
   */
  static override _entityName = 'SystemParametersBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SystemParametersBiEntities entity.
   */
  static _keys = ['SourceKey'];
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Srs Max Row Cn.
   */
  declare srsMaxRowCn: DeserializedType<T, 'Edm.Int32'>;
  /**
   * O Data Build Metadata Cache On Aos Startup.
   * @nullable
   */
  declare oDataBuildMetadataCacheOnAosStartup?: NoYes | null;
  /**
   * System Privacy Statement Url.
   * @nullable
   */
  declare systemPrivacyStatementUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * System Line Number Increment.
   */
  declare systemLineNumberIncrement: DeserializedType<T, 'Edm.Int32'>;
  /**
   * System Exchange Rate Type.
   */
  declare systemExchangeRateType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Thai Software Seq No.
   * @nullable
   */
  declare thaiSoftwareSeqNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use Legacy Query Relations.
   * @nullable
   */
  declare useLegacyQueryRelations?: NoYes | null;
  /**
   * Chart Of Accounts Delimiter.
   * @nullable
   */
  declare chartOfAccountsDelimiter?: DimensionLedgerAccountDelimiter | null;
  /**
   * Use Adv Certificate Store.
   * @nullable
   */
  declare useAdvCertificateStore?: NoYes | null;
  /**
   * O Data Allow Null For Enum Key Value.
   * @nullable
   */
  declare oDataAllowNullForEnumKeyValue?: NoYes | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * System Currency Code.
   * @nullable
   */
  declare systemCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * System Legal Terms Url.
   * @nullable
   */
  declare systemLegalTermsUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * System Language Id.
   * @nullable
   */
  declare systemLanguageId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SystemParametersBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SystemParametersBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  srsMaxRowCn: DeserializedType<T, 'Edm.Int32'>;
  oDataBuildMetadataCacheOnAosStartup?: NoYes | null;
  systemPrivacyStatementUrl?: DeserializedType<T, 'Edm.String'> | null;
  key: DeserializedType<T, 'Edm.Int32'>;
  systemLineNumberIncrement: DeserializedType<T, 'Edm.Int32'>;
  systemExchangeRateType: DeserializedType<T, 'Edm.Int64'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  thaiSoftwareSeqNo?: DeserializedType<T, 'Edm.String'> | null;
  useLegacyQueryRelations?: NoYes | null;
  chartOfAccountsDelimiter?: DimensionLedgerAccountDelimiter | null;
  useAdvCertificateStore?: NoYes | null;
  oDataAllowNullForEnumKeyValue?: NoYes | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  systemCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  systemLegalTermsUrl?: DeserializedType<T, 'Edm.String'> | null;
  systemLanguageId?: DeserializedType<T, 'Edm.String'> | null;
}
