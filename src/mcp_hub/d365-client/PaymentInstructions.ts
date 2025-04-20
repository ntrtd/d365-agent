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
import type { PaymentInstructionsApi } from './PaymentInstructionsApi';

/**
 * This class represents the entity "PaymentInstructions" of service "d365_metadata".
 */
export class PaymentInstructions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PaymentInstructionsType<T>
{
  /**
   * Technical entity name for PaymentInstructions.
   */
  static override _entityName = 'PaymentInstructions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PaymentInstructions entity.
   */
  static _keys = ['dataAreaId', 'PaymentInstructionCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Instruction Code.
   */
  declare paymentInstructionCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PaymentInstructionsApi<T>) {
    super(_entityApi);
  }
}

export interface PaymentInstructionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  paymentInstructionCode: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
