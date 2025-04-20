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
import { Workers } from './Workers';

/**
 * Request builder class for operations supported on the {@link Workers} entity.
 */
export class WorkersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Workers<T>, T> {
  /**
   * Returns a request builder for querying all `Workers` entities.
   * @returns A request builder for creating requests to retrieve all `Workers` entities.
   */
  getAll(): GetAllRequestBuilder<Workers<T>, T> {
    return new GetAllRequestBuilder<Workers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Workers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Workers`.
   */
  create(entity: Workers<T>): CreateRequestBuilder<Workers<T>, T> {
    return new CreateRequestBuilder<Workers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Workers` entity based on its keys.
   * @param personnelNumber Key property. See {@link Workers.personnelNumber}.
   * @returns A request builder for creating requests to retrieve one `Workers` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Workers<T>, T> {
    return new GetByKeyRequestBuilder<Workers<T>, T>(this.entityApi, {
      PersonnelNumber: personnelNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Workers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Workers`.
   */
  update(entity: Workers<T>): UpdateRequestBuilder<Workers<T>, T> {
    return new UpdateRequestBuilder<Workers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Workers`.
   * @param personnelNumber Key property. See {@link Workers.personnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `Workers`.
   */
  delete(personnelNumber: string): DeleteRequestBuilder<Workers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Workers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Workers` by taking the entity as a parameter.
   */
  delete(entity: Workers<T>): DeleteRequestBuilder<Workers<T>, T>;
  delete(personnelNumberOrEntity: any): DeleteRequestBuilder<Workers<T>, T> {
    return new DeleteRequestBuilder<Workers<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof Workers
        ? personnelNumberOrEntity
        : { PersonnelNumber: personnelNumberOrEntity! }
    );
  }
}
