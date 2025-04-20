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
import type { ElectronicPaymentInstructionsApi } from './ElectronicPaymentInstructionsApi';

/**
 * This class represents the entity "ElectronicPaymentInstructions" of service "d365_metadata".
 */
export class ElectronicPaymentInstructions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ElectronicPaymentInstructionsType<T>
{
  /**
   * Technical entity name for ElectronicPaymentInstructions.
   */
  static override _entityName = 'ElectronicPaymentInstructions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ElectronicPaymentInstructions entity.
   */
  static _keys = ['dataAreaId', 'LayoutGroupId', 'Instruction'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Layout Group Id.
   */
  declare layoutGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Instruction.
   */
  declare instruction: DeserializedType<T, 'Edm.String'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ElectronicPaymentInstructionsApi<T>) {
    super(_entityApi);
  }
}

export interface ElectronicPaymentInstructionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  layoutGroupId: DeserializedType<T, 'Edm.String'>;
  instruction: DeserializedType<T, 'Edm.String'>;
  quantity: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
