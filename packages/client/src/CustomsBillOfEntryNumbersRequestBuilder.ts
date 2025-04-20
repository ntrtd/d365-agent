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
import { CustomsBillOfEntryNumbers } from './CustomsBillOfEntryNumbers';

/**
 * Request builder class for operations supported on the {@link CustomsBillOfEntryNumbers} entity.
 */
export class CustomsBillOfEntryNumbersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomsBillOfEntryNumbers<T>, T> {
  /**
   * Returns a request builder for querying all `CustomsBillOfEntryNumbers` entities.
   * @returns A request builder for creating requests to retrieve all `CustomsBillOfEntryNumbers` entities.
   */
  getAll(): GetAllRequestBuilder<CustomsBillOfEntryNumbers<T>, T> {
    return new GetAllRequestBuilder<CustomsBillOfEntryNumbers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomsBillOfEntryNumbers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomsBillOfEntryNumbers`.
   */
  create(
    entity: CustomsBillOfEntryNumbers<T>
  ): CreateRequestBuilder<CustomsBillOfEntryNumbers<T>, T> {
    return new CreateRequestBuilder<CustomsBillOfEntryNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomsBillOfEntryNumbers` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomsBillOfEntryNumbers.dataAreaId}.
   * @param billOfEntry Key property. See {@link CustomsBillOfEntryNumbers.billOfEntry}.
   * @returns A request builder for creating requests to retrieve one `CustomsBillOfEntryNumbers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    billOfEntry: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomsBillOfEntryNumbers<T>, T> {
    return new GetByKeyRequestBuilder<CustomsBillOfEntryNumbers<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BillOfEntry: billOfEntry
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomsBillOfEntryNumbers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomsBillOfEntryNumbers`.
   */
  update(
    entity: CustomsBillOfEntryNumbers<T>
  ): UpdateRequestBuilder<CustomsBillOfEntryNumbers<T>, T> {
    return new UpdateRequestBuilder<CustomsBillOfEntryNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomsBillOfEntryNumbers`.
   * @param dataAreaId Key property. See {@link CustomsBillOfEntryNumbers.dataAreaId}.
   * @param billOfEntry Key property. See {@link CustomsBillOfEntryNumbers.billOfEntry}.
   * @returns A request builder for creating requests that delete an entity of type `CustomsBillOfEntryNumbers`.
   */
  delete(
    dataAreaId: string,
    billOfEntry: string
  ): DeleteRequestBuilder<CustomsBillOfEntryNumbers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomsBillOfEntryNumbers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomsBillOfEntryNumbers` by taking the entity as a parameter.
   */
  delete(
    entity: CustomsBillOfEntryNumbers<T>
  ): DeleteRequestBuilder<CustomsBillOfEntryNumbers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    billOfEntry?: string
  ): DeleteRequestBuilder<CustomsBillOfEntryNumbers<T>, T> {
    return new DeleteRequestBuilder<CustomsBillOfEntryNumbers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomsBillOfEntryNumbers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BillOfEntry: billOfEntry!
          }
    );
  }
}
