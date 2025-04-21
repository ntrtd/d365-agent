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
import type { AssetGroupBiEntitiesApi } from './AssetGroupBiEntitiesApi';
import { NoYes } from './NoYes';
import { AssetPropertyType } from './AssetPropertyType';
import { FbpiscofinsFixedAssetAppropMethodBr } from './FbpiscofinsFixedAssetAppropMethodBr';
import { AssetDeferredTypeJp } from './AssetDeferredTypeJp';
import { FbpiscofinsFixedAssetCreditGroupBr } from './FbpiscofinsFixedAssetCreditGroupBr';
import { AssetClassificationJp } from './AssetClassificationJp';
import { FbpiscofinsFixedAssetCreditPurposeBr } from './FbpiscofinsFixedAssetCreditPurposeBr';
import { AssetType } from './AssetType';

/**
 * This class represents the entity "AssetGroupBiEntities" of service "d365_metadata".
 */
export class AssetGroupBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetGroupBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetGroupBiEntities.
   */
  static override _entityName = 'AssetGroupBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetGroupBiEntities entity.
   */
  static _keys = ['dataAreaId', 'GroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Auto Number Barcode.
   * @nullable
   */
  declare autoNumberBarcode?: NoYes | null;
  /**
   * Cofins Taxation Code Br.
   * @nullable
   */
  declare cofinsTaxationCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Property Type.
   * @nullable
   */
  declare propertyType?: AssetPropertyType | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Piscofins Receivable Long Term Br.
   * @nullable
   */
  declare piscofinsReceivableLongTermBr?: NoYes | null;
  /**
   * Tax Icms Outgoing Br.
   * @nullable
   */
  declare taxIcmsOutgoingBr?: NoYes | null;
  /**
   * Piscofins Appropriation Method Br.
   * @nullable
   */
  declare piscofinsAppropriationMethodBr?: FbpiscofinsFixedAssetAppropMethodBr | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Deferred Type Jp.
   * @nullable
   */
  declare assetDeferredTypeJp?: AssetDeferredTypeJp | null;
  /**
   * Gis Layer Id.
   * @nullable
   */
  declare gisLayerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Replacement Cost Factor.
   */
  declare replacementCostFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Barcode Number Sequence Table.
   */
  declare barcodeNumberSequenceTable: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Piscofins Credit Group Br.
   * @nullable
   */
  declare piscofinsCreditGroupBr?: FbpiscofinsFixedAssetCreditGroupBr | null;
  /**
   * Asset Classification Jp.
   * @nullable
   */
  declare assetClassificationJp?: AssetClassificationJp | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Pis Taxation Code Br.
   * @nullable
   */
  declare pisTaxationCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Piscofins Credit Purpose Br.
   * @nullable
   */
  declare piscofinsCreditPurposeBr?: FbpiscofinsFixedAssetCreditPurposeBr | null;
  /**
   * Location.
   * @nullable
   */
  declare location?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Capitalization Threshold.
   */
  declare capitalizationThreshold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Auto Number.
   * @nullable
   */
  declare autoNumber?: NoYes | null;
  /**
   * Icms Credit Installments Br.
   */
  declare icmsCreditInstallmentsBr: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Piscofins Credit Installments Br.
   */
  declare piscofinsCreditInstallmentsBr: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Insured Value Factor.
   */
  declare insuredValueFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Major Type.
   * @nullable
   */
  declare majorType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Asset Type.
   * @nullable
   */
  declare assetType?: AssetType | null;
  /**
   * Auto Number Sequence Table.
   */
  declare autoNumberSequenceTable: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: AssetGroupBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetGroupBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  autoNumberBarcode?: NoYes | null;
  cofinsTaxationCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  propertyType?: AssetPropertyType | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  piscofinsReceivableLongTermBr?: NoYes | null;
  taxIcmsOutgoingBr?: NoYes | null;
  piscofinsAppropriationMethodBr?: FbpiscofinsFixedAssetAppropMethodBr | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  assetDeferredTypeJp?: AssetDeferredTypeJp | null;
  gisLayerId?: DeserializedType<T, 'Edm.String'> | null;
  replacementCostFactor: DeserializedType<T, 'Edm.Decimal'>;
  barcodeNumberSequenceTable: DeserializedType<T, 'Edm.Int64'>;
  piscofinsCreditGroupBr?: FbpiscofinsFixedAssetCreditGroupBr | null;
  assetClassificationJp?: AssetClassificationJp | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  pisTaxationCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  piscofinsCreditPurposeBr?: FbpiscofinsFixedAssetCreditPurposeBr | null;
  location?: DeserializedType<T, 'Edm.String'> | null;
  capitalizationThreshold: DeserializedType<T, 'Edm.Decimal'>;
  autoNumber?: NoYes | null;
  icmsCreditInstallmentsBr: DeserializedType<T, 'Edm.Int32'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  piscofinsCreditInstallmentsBr: DeserializedType<T, 'Edm.Int32'>;
  insuredValueFactor: DeserializedType<T, 'Edm.Decimal'>;
  majorType?: DeserializedType<T, 'Edm.String'> | null;
  assetType?: AssetType | null;
  autoNumberSequenceTable: DeserializedType<T, 'Edm.Int64'>;
}
