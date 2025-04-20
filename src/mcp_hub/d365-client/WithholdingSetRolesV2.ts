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
import type { WithholdingSetRolesV2Api } from './WithholdingSetRolesV2Api';
import { LtmRole } from './LtmRole';

/**
 * This class represents the entity "WithholdingSetRolesV2" of service "d365_metadata".
 */
export class WithholdingSetRolesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WithholdingSetRolesV2Type<T>
{
  /**
   * Technical entity name for WithholdingSetRolesV2.
   */
  static override _entityName = 'WithholdingSetRolesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WithholdingSetRolesV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'TaxPayerTypeId',
    'AddressStateId',
    'AddressCountryRegionId',
    'WithholdingSetID'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Payer Type Id.
   */
  declare taxPayerTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Address State Id.
   */
  declare addressStateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Country Region Id.
   */
  declare addressCountryRegionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Withholding Set Id.
   */
  declare withholdingSetId: DeserializedType<T, 'Edm.String'>;
  /**
   * Role.
   * @nullable
   */
  declare role?: LtmRole | null;

  constructor(_entityApi: WithholdingSetRolesV2Api<T>) {
    super(_entityApi);
  }
}

export interface WithholdingSetRolesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxPayerTypeId: DeserializedType<T, 'Edm.String'>;
  addressStateId: DeserializedType<T, 'Edm.String'>;
  addressCountryRegionId: DeserializedType<T, 'Edm.String'>;
  withholdingSetId: DeserializedType<T, 'Edm.String'>;
  role?: LtmRole | null;
}
