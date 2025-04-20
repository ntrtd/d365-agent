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
import { Consignees } from './Consignees';

/**
 * Request builder class for operations supported on the {@link Consignees} entity.
 */
export class ConsigneesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Consignees<T>, T> {
  /**
   * Returns a request builder for querying all `Consignees` entities.
   * @returns A request builder for creating requests to retrieve all `Consignees` entities.
   */
  getAll(): GetAllRequestBuilder<Consignees<T>, T> {
    return new GetAllRequestBuilder<Consignees<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Consignees` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Consignees`.
   */
  create(entity: Consignees<T>): CreateRequestBuilder<Consignees<T>, T> {
    return new CreateRequestBuilder<Consignees<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Consignees` entity based on its keys.
   * @param dataAreaId Key property. See {@link Consignees.dataAreaId}.
   * @param internalAccountNumber Key property. See {@link Consignees.internalAccountNumber}.
   * @returns A request builder for creating requests to retrieve one `Consignees` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    internalAccountNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Consignees<T>, T> {
    return new GetByKeyRequestBuilder<Consignees<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      InternalAccountNumber: internalAccountNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Consignees`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Consignees`.
   */
  update(entity: Consignees<T>): UpdateRequestBuilder<Consignees<T>, T> {
    return new UpdateRequestBuilder<Consignees<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Consignees`.
   * @param dataAreaId Key property. See {@link Consignees.dataAreaId}.
   * @param internalAccountNumber Key property. See {@link Consignees.internalAccountNumber}.
   * @returns A request builder for creating requests that delete an entity of type `Consignees`.
   */
  delete(
    dataAreaId: string,
    internalAccountNumber: string
  ): DeleteRequestBuilder<Consignees<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Consignees`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Consignees` by taking the entity as a parameter.
   */
  delete(entity: Consignees<T>): DeleteRequestBuilder<Consignees<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    internalAccountNumber?: string
  ): DeleteRequestBuilder<Consignees<T>, T> {
    return new DeleteRequestBuilder<Consignees<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Consignees
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InternalAccountNumber: internalAccountNumber!
          }
    );
  }
}
