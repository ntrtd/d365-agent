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
import type { VendInvoiceInfoLine_ProjectBiEntitiesApi } from './VendInvoiceInfoLine_ProjectBiEntitiesApi';

/**
 * This class represents the entity "VendInvoiceInfoLine_ProjectBiEntities" of service "d365_metadata".
 */
export class VendInvoiceInfoLine_ProjectBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendInvoiceInfoLine_ProjectBiEntitiesType<T>
{
  /**
   * Technical entity name for VendInvoiceInfoLine_ProjectBiEntities.
   */
  static override _entityName = 'VendInvoiceInfoLine_ProjectBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendInvoiceInfoLine_ProjectBiEntities entity.
   */
  static _keys = ['dataAreaId', 'VendInvoiceInfoLineRefRecId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vend Invoice Info Line Ref Rec Id.
   */
  declare vendInvoiceInfoLineRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Proj Trans Id.
   * @nullable
   */
  declare projTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Tax Item Group Id.
   * @nullable
   */
  declare projTaxItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Role Id.
   * @nullable
   */
  declare roleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Data Area Id.
   * @nullable
   */
  declare projDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Activity Number.
   * @nullable
   */
  declare projActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource.
   */
  declare resource: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Proj Tax Group Id.
   * @nullable
   */
  declare projTaxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Category Id.
   * @nullable
   */
  declare projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transfer Currency.
   * @nullable
   */
  declare transferCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Sales Price.
   */
  declare projSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Proj Sales Currency Id.
   * @nullable
   */
  declare projSalesCurrencyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transfer Price.
   */
  declare transferPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Sales Unit Id.
   */
  declare projSalesUnitId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Proj Line Property Id.
   * @nullable
   */
  declare projLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Intercompany Billed.
   */
  declare intercompanyBilled: DeserializedType<T, 'Edm.Boolean'>;

  constructor(_entityApi: VendInvoiceInfoLine_ProjectBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface VendInvoiceInfoLine_ProjectBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vendInvoiceInfoLineRefRecId: DeserializedType<T, 'Edm.Int64'>;
  projTransId?: DeserializedType<T, 'Edm.String'> | null;
  projTaxItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  roleId?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  projDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  projActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  resource: DeserializedType<T, 'Edm.Int64'>;
  projTaxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transferCurrency?: DeserializedType<T, 'Edm.String'> | null;
  projSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  projSalesCurrencyId?: DeserializedType<T, 'Edm.String'> | null;
  transferPrice: DeserializedType<T, 'Edm.Decimal'>;
  projSalesUnitId: DeserializedType<T, 'Edm.Int64'>;
  projLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  intercompanyBilled: DeserializedType<T, 'Edm.Boolean'>;
}
