/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { PayIntV1WorkerContacts } from './PayIntV1WorkerContacts';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';

/**
 * Request builder class for operations supported on the {@link PayIntV1WorkerContacts} entity.
 */
export class PayIntV1WorkerContactsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1WorkerContacts<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1WorkerContacts` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1WorkerContacts` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1WorkerContacts<T>, T> {
    return new GetAllRequestBuilder<PayIntV1WorkerContacts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1WorkerContacts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1WorkerContacts`.
   */
  create(
    entity: PayIntV1WorkerContacts<T>
  ): CreateRequestBuilder<PayIntV1WorkerContacts<T>, T> {
    return new CreateRequestBuilder<PayIntV1WorkerContacts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1WorkerContacts` entity based on its keys.
   * @param personnelNumber Key property. See {@link PayIntV1WorkerContacts.personnelNumber}.
   * @param type Key property. See {@link PayIntV1WorkerContacts.type}.
   * @param locator Key property. See {@link PayIntV1WorkerContacts.locator}.
   * @param description Key property. See {@link PayIntV1WorkerContacts.description}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1WorkerContacts` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LogisticsElectronicAddressMethodType'
    >,
    locator: DeserializedType<T, 'Edm.String'>,
    description: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1WorkerContacts<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1WorkerContacts<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        Type: type,
        Locator: locator,
        Description: description
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1WorkerContacts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1WorkerContacts`.
   */
  update(
    entity: PayIntV1WorkerContacts<T>
  ): UpdateRequestBuilder<PayIntV1WorkerContacts<T>, T> {
    return new UpdateRequestBuilder<PayIntV1WorkerContacts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1WorkerContacts`.
   * @param personnelNumber Key property. See {@link PayIntV1WorkerContacts.personnelNumber}.
   * @param type Key property. See {@link PayIntV1WorkerContacts.type}.
   * @param locator Key property. See {@link PayIntV1WorkerContacts.locator}.
   * @param description Key property. See {@link PayIntV1WorkerContacts.description}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1WorkerContacts`.
   */
  delete(
    personnelNumber: string,
    type: LogisticsElectronicAddressMethodType,
    locator: string,
    description: string
  ): DeleteRequestBuilder<PayIntV1WorkerContacts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1WorkerContacts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1WorkerContacts` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1WorkerContacts<T>
  ): DeleteRequestBuilder<PayIntV1WorkerContacts<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    type?: LogisticsElectronicAddressMethodType,
    locator?: string,
    description?: string
  ): DeleteRequestBuilder<PayIntV1WorkerContacts<T>, T> {
    return new DeleteRequestBuilder<PayIntV1WorkerContacts<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof PayIntV1WorkerContacts
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            Type: type!,
            Locator: locator!,
            Description: description!
          }
    );
  }
}
