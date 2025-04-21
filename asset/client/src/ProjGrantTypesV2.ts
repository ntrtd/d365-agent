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
import type { ProjGrantTypesV2Api } from './ProjGrantTypesV2Api';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ProjGrantTypesV2" of service "d365_metadata".
 */
export class ProjGrantTypesV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjGrantTypesV2Type<T>
{
  /**
   * Technical entity name for ProjGrantTypesV2.
   */
  static override _entityName = 'ProjGrantTypesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjGrantTypesV2 entity.
   */
  static _keys = ['dataAreaId', 'GrantType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Grant Type.
   */
  declare grantType: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manager Personnel Number.
   * @nullable
   */
  declare managerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Personnel Number.
   * @nullable
   */
  declare contactPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Number.
   * @nullable
   */
  declare organizationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Grantor.
   * @nullable
   */
  declare subGrantor?: NoYes | null;
  /**
   * State Mandate.
   * @nullable
   */
  declare stateMandate?: NoYes | null;
  /**
   * Exclude From Sefa.
   * @nullable
   */
  declare excludeFromSefa?: NoYes | null;
  /**
   * Federal Mandate.
   * @nullable
   */
  declare federalMandate?: NoYes | null;

  constructor(_entityApi: ProjGrantTypesV2Api<T>) {
    super(_entityApi);
  }
}

export interface ProjGrantTypesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  grantType: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  managerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  organizationNumber?: DeserializedType<T, 'Edm.String'> | null;
  subGrantor?: NoYes | null;
  stateMandate?: NoYes | null;
  excludeFromSefa?: NoYes | null;
  federalMandate?: NoYes | null;
}
