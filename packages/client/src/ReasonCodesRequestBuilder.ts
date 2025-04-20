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
import { ReasonCodes } from './ReasonCodes';

/**
 * Request builder class for operations supported on the {@link ReasonCodes} entity.
 */
export class ReasonCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReasonCodes<T>, T> {
  /**
   * Returns a request builder for querying all `ReasonCodes` entities.
   * @returns A request builder for creating requests to retrieve all `ReasonCodes` entities.
   */
  getAll(): GetAllRequestBuilder<ReasonCodes<T>, T> {
    return new GetAllRequestBuilder<ReasonCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReasonCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReasonCodes`.
   */
  create(entity: ReasonCodes<T>): CreateRequestBuilder<ReasonCodes<T>, T> {
    return new CreateRequestBuilder<ReasonCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ReasonCodes` entity based on its keys.
   * @param reasonCodeId Key property. See {@link ReasonCodes.reasonCodeId}.
   * @returns A request builder for creating requests to retrieve one `ReasonCodes` entity based on its keys.
   */
  getByKey(
    reasonCodeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReasonCodes<T>, T> {
    return new GetByKeyRequestBuilder<ReasonCodes<T>, T>(this.entityApi, {
      ReasonCodeId: reasonCodeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ReasonCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReasonCodes`.
   */
  update(entity: ReasonCodes<T>): UpdateRequestBuilder<ReasonCodes<T>, T> {
    return new UpdateRequestBuilder<ReasonCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ReasonCodes`.
   * @param reasonCodeId Key property. See {@link ReasonCodes.reasonCodeId}.
   * @returns A request builder for creating requests that delete an entity of type `ReasonCodes`.
   */
  delete(reasonCodeId: string): DeleteRequestBuilder<ReasonCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReasonCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReasonCodes` by taking the entity as a parameter.
   */
  delete(entity: ReasonCodes<T>): DeleteRequestBuilder<ReasonCodes<T>, T>;
  delete(reasonCodeIdOrEntity: any): DeleteRequestBuilder<ReasonCodes<T>, T> {
    return new DeleteRequestBuilder<ReasonCodes<T>, T>(
      this.entityApi,
      reasonCodeIdOrEntity instanceof ReasonCodes
        ? reasonCodeIdOrEntity
        : { ReasonCodeId: reasonCodeIdOrEntity! }
    );
  }
}
