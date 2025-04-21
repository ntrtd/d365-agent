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
import { WorkerContactsV2 } from './WorkerContactsV2';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';

/**
 * Request builder class for operations supported on the {@link WorkerContactsV2} entity.
 */
export class WorkerContactsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerContactsV2<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerContactsV2` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerContactsV2` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerContactsV2<T>, T> {
    return new GetAllRequestBuilder<WorkerContactsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkerContactsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerContactsV2`.
   */
  create(
    entity: WorkerContactsV2<T>
  ): CreateRequestBuilder<WorkerContactsV2<T>, T> {
    return new CreateRequestBuilder<WorkerContactsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerContactsV2` entity based on its keys.
   * @param personnelNumber Key property. See {@link WorkerContactsV2.personnelNumber}.
   * @param type Key property. See {@link WorkerContactsV2.type}.
   * @param locator Key property. See {@link WorkerContactsV2.locator}.
   * @param description Key property. See {@link WorkerContactsV2.description}.
   * @returns A request builder for creating requests to retrieve one `WorkerContactsV2` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LogisticsElectronicAddressMethodType'
    >,
    locator: DeserializedType<T, 'Edm.String'>,
    description: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkerContactsV2<T>, T> {
    return new GetByKeyRequestBuilder<WorkerContactsV2<T>, T>(this.entityApi, {
      PersonnelNumber: personnelNumber,
      Type: type,
      Locator: locator,
      Description: description
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerContactsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerContactsV2`.
   */
  update(
    entity: WorkerContactsV2<T>
  ): UpdateRequestBuilder<WorkerContactsV2<T>, T> {
    return new UpdateRequestBuilder<WorkerContactsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerContactsV2`.
   * @param personnelNumber Key property. See {@link WorkerContactsV2.personnelNumber}.
   * @param type Key property. See {@link WorkerContactsV2.type}.
   * @param locator Key property. See {@link WorkerContactsV2.locator}.
   * @param description Key property. See {@link WorkerContactsV2.description}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerContactsV2`.
   */
  delete(
    personnelNumber: string,
    type: LogisticsElectronicAddressMethodType,
    locator: string,
    description: string
  ): DeleteRequestBuilder<WorkerContactsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerContactsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerContactsV2` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerContactsV2<T>
  ): DeleteRequestBuilder<WorkerContactsV2<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    type?: LogisticsElectronicAddressMethodType,
    locator?: string,
    description?: string
  ): DeleteRequestBuilder<WorkerContactsV2<T>, T> {
    return new DeleteRequestBuilder<WorkerContactsV2<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof WorkerContactsV2
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
