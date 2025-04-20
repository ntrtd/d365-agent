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
import type { TransferLineFiscalInfoApi } from './TransferLineFiscalInfoApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "TransferLineFiscalInfo" of service "d365_metadata".
 */
export class TransferLineFiscalInfo<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransferLineFiscalInfoType<T>
{
  /**
   * Technical entity name for TransferLineFiscalInfo.
   */
  static override _entityName = 'TransferLineFiscalInfo';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransferLineFiscalInfo entity.
   */
  static _keys = ['dataAreaId', 'TransferId', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transfer Id.
   */
  declare transferId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ship Tax Item Group.
   * @nullable
   */
  declare shipTaxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Changed Manually.
   * @nullable
   */
  declare priceChangedManually?: NoYes | null;
  /**
   * Receive Tax Group.
   * @nullable
   */
  declare receiveTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Unit.
   */
  declare priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receive Price.
   */
  declare receivePrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ship Tax Group.
   * @nullable
   */
  declare shipTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receive Tax Item Group.
   * @nullable
   */
  declare receiveTaxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Cfop Id.
   * @nullable
   */
  declare shipCfopId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receive Cfop Id.
   * @nullable
   */
  declare receiveCfopId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Price.
   */
  declare shipPrice: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: TransferLineFiscalInfoApi<T>) {
    super(_entityApi);
  }
}

export interface TransferLineFiscalInfoType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transferId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  shipTaxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  priceChangedManually?: NoYes | null;
  receiveTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  receivePrice: DeserializedType<T, 'Edm.Decimal'>;
  shipTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  receiveTaxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  shipCfopId?: DeserializedType<T, 'Edm.String'> | null;
  receiveCfopId?: DeserializedType<T, 'Edm.String'> | null;
  shipPrice: DeserializedType<T, 'Edm.Decimal'>;
}
