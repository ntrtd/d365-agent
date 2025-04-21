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
import { DirectDebitMandates } from './DirectDebitMandates';

/**
 * Request builder class for operations supported on the {@link DirectDebitMandates} entity.
 */
export class DirectDebitMandatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DirectDebitMandates<T>, T> {
  /**
   * Returns a request builder for querying all `DirectDebitMandates` entities.
   * @returns A request builder for creating requests to retrieve all `DirectDebitMandates` entities.
   */
  getAll(): GetAllRequestBuilder<DirectDebitMandates<T>, T> {
    return new GetAllRequestBuilder<DirectDebitMandates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DirectDebitMandates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DirectDebitMandates`.
   */
  create(
    entity: DirectDebitMandates<T>
  ): CreateRequestBuilder<DirectDebitMandates<T>, T> {
    return new CreateRequestBuilder<DirectDebitMandates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DirectDebitMandates` entity based on its keys.
   * @param dataAreaId Key property. See {@link DirectDebitMandates.dataAreaId}.
   * @param mandateId Key property. See {@link DirectDebitMandates.mandateId}.
   * @returns A request builder for creating requests to retrieve one `DirectDebitMandates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    mandateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DirectDebitMandates<T>, T> {
    return new GetByKeyRequestBuilder<DirectDebitMandates<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MandateId: mandateId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DirectDebitMandates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DirectDebitMandates`.
   */
  update(
    entity: DirectDebitMandates<T>
  ): UpdateRequestBuilder<DirectDebitMandates<T>, T> {
    return new UpdateRequestBuilder<DirectDebitMandates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DirectDebitMandates`.
   * @param dataAreaId Key property. See {@link DirectDebitMandates.dataAreaId}.
   * @param mandateId Key property. See {@link DirectDebitMandates.mandateId}.
   * @returns A request builder for creating requests that delete an entity of type `DirectDebitMandates`.
   */
  delete(
    dataAreaId: string,
    mandateId: string
  ): DeleteRequestBuilder<DirectDebitMandates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DirectDebitMandates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DirectDebitMandates` by taking the entity as a parameter.
   */
  delete(
    entity: DirectDebitMandates<T>
  ): DeleteRequestBuilder<DirectDebitMandates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    mandateId?: string
  ): DeleteRequestBuilder<DirectDebitMandates<T>, T> {
    return new DeleteRequestBuilder<DirectDebitMandates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DirectDebitMandates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MandateId: mandateId!
          }
    );
  }
}
