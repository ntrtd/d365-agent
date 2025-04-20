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
import type { EInvoiceCfdiParametersEntitiesApi } from './EInvoiceCfdiParametersEntitiesApi';
import { NoYes } from './NoYes';
import { CfdDigestAlgorithmMx } from './CfdDigestAlgorithmMx';
import { EInvoiceCfdiEnvironmentMx } from './EInvoiceCfdiEnvironmentMx';
import { EInvoiceCfdiVersionMx } from './EInvoiceCfdiVersionMx';

/**
 * This class represents the entity "EInvoiceCFDIParametersEntities" of service "d365_metadata".
 */
export class EInvoiceCfdiParametersEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EInvoiceCfdiParametersEntitiesType<T>
{
  /**
   * Technical entity name for EInvoiceCfdiParametersEntities.
   */
  static override _entityName = 'EInvoiceCFDIParametersEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EInvoiceCfdiParametersEntities entity.
   */
  static _keys = ['dataAreaId', 'Key'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Retail Exclude Cust Orders From Cfdi Global.
   * @nullable
   */
  declare retailExcludeCustOrdersFromCfdiGlobal?: NoYes | null;
  /**
   * Send Report File.
   * @nullable
   */
  declare sendReportFile?: NoYes | null;
  /**
   * Email Id.
   * @nullable
   */
  declare emailId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cfdi Digest Algorithm.
   * @nullable
   */
  declare cfdiDigestAlgorithm?: CfdDigestAlgorithmMx | null;
  /**
   * Cfdi Environment.
   * @nullable
   */
  declare cfdiEnvironment?: EInvoiceCfdiEnvironmentMx | null;
  /**
   * Retail Invoice Rfc.
   * @nullable
   */
  declare retailInvoiceRfc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Certificate.
   * @nullable
   */
  declare certificate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Recalculate Rounding Of Tax Base Amount.
   * @nullable
   */
  declare retailRecalculateRoundingOfTaxBaseAmount?: NoYes | null;
  /**
   * Retail Item Description.
   * @nullable
   */
  declare retailItemDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Unit Code.
   * @nullable
   */
  declare retailUnitCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Enable Related Cfdi In Returns.
   * @nullable
   */
  declare retailEnableRelatedCfdiInReturns?: NoYes | null;
  /**
   * Cfdi Version.
   * @nullable
   */
  declare cfdiVersion?: EInvoiceCfdiVersionMx | null;
  /**
   * Retail Paym Method.
   * @nullable
   */
  declare retailPaymMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enabled Cfdi.
   * @nullable
   */
  declare enabledCfdi?: NoYes | null;
  /**
   * Retail Product Code.
   * @nullable
   */
  declare retailProductCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cfdixml Schema File.
   * @nullable
   */
  declare cfdixmlSchemaFile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Send By Mail.
   * @nullable
   */
  declare sendByMail?: NoYes | null;
  /**
   * Split Tax Amount Per Lines.
   * @nullable
   */
  declare splitTaxAmountPerLines?: NoYes | null;
  /**
   * Retail Purpose.
   * @nullable
   */
  declare retailPurpose?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cfdipac Certificate.
   * @nullable
   */
  declare cfdipacCertificate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pac Account Id.
   * @nullable
   */
  declare pacAccountId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EInvoiceCfdiParametersEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface EInvoiceCfdiParametersEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  key: DeserializedType<T, 'Edm.Int32'>;
  retailExcludeCustOrdersFromCfdiGlobal?: NoYes | null;
  sendReportFile?: NoYes | null;
  emailId?: DeserializedType<T, 'Edm.String'> | null;
  cfdiDigestAlgorithm?: CfdDigestAlgorithmMx | null;
  cfdiEnvironment?: EInvoiceCfdiEnvironmentMx | null;
  retailInvoiceRfc?: DeserializedType<T, 'Edm.String'> | null;
  certificate?: DeserializedType<T, 'Edm.String'> | null;
  retailRecalculateRoundingOfTaxBaseAmount?: NoYes | null;
  retailItemDescription?: DeserializedType<T, 'Edm.String'> | null;
  retailUnitCode?: DeserializedType<T, 'Edm.String'> | null;
  retailEnableRelatedCfdiInReturns?: NoYes | null;
  cfdiVersion?: EInvoiceCfdiVersionMx | null;
  retailPaymMethod?: DeserializedType<T, 'Edm.String'> | null;
  enabledCfdi?: NoYes | null;
  retailProductCode?: DeserializedType<T, 'Edm.String'> | null;
  cfdixmlSchemaFile?: DeserializedType<T, 'Edm.String'> | null;
  sendByMail?: NoYes | null;
  splitTaxAmountPerLines?: NoYes | null;
  retailPurpose?: DeserializedType<T, 'Edm.String'> | null;
  cfdipacCertificate?: DeserializedType<T, 'Edm.String'> | null;
  pacAccountId?: DeserializedType<T, 'Edm.String'> | null;
}
