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
import type { VendDependentsApi } from './VendDependentsApi';
import { RelationshipTypeBr } from './RelationshipTypeBr';
import { DeductionTypePersonBr } from './DeductionTypePersonBr';

/**
 * This class represents the entity "VendDependents" of service "d365_metadata".
 */
export class VendDependents<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VendDependentsType<T>
{
  /**
   * Technical entity name for VendDependents.
   */
  static override _entityName = 'VendDependents';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendDependents entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Relationship Type.
   * @nullable
   */
  declare relationshipType?: RelationshipTypeBr | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cpf Num.
   * @nullable
   */
  declare cpfNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Table Account Num.
   * @nullable
   */
  declare vendTableAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deduction Type.
   * @nullable
   */
  declare deductionType?: DeductionTypePersonBr | null;

  constructor(_entityApi: VendDependentsApi<T>) {
    super(_entityApi);
  }
}

export interface VendDependentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  relationshipType?: RelationshipTypeBr | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  cpfNum?: DeserializedType<T, 'Edm.String'> | null;
  vendTableAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  deductionType?: DeductionTypePersonBr | null;
}
