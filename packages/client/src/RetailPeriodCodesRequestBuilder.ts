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
import { RetailPeriodCodes } from './RetailPeriodCodes';

/**
 * Request builder class for operations supported on the {@link RetailPeriodCodes} entity.
 */
export class RetailPeriodCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailPeriodCodes<T>, T> {
  /**
   * Returns a request builder for querying all `RetailPeriodCodes` entities.
   * @returns A request builder for creating requests to retrieve all `RetailPeriodCodes` entities.
   */
  getAll(): GetAllRequestBuilder<RetailPeriodCodes<T>, T> {
    return new GetAllRequestBuilder<RetailPeriodCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailPeriodCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailPeriodCodes`.
   */
  create(
    entity: RetailPeriodCodes<T>
  ): CreateRequestBuilder<RetailPeriodCodes<T>, T> {
    return new CreateRequestBuilder<RetailPeriodCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailPeriodCodes` entity based on its keys.
   * @param code Key property. See {@link RetailPeriodCodes.code}.
   * @returns A request builder for creating requests to retrieve one `RetailPeriodCodes` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailPeriodCodes<T>, T> {
    return new GetByKeyRequestBuilder<RetailPeriodCodes<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailPeriodCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailPeriodCodes`.
   */
  update(
    entity: RetailPeriodCodes<T>
  ): UpdateRequestBuilder<RetailPeriodCodes<T>, T> {
    return new UpdateRequestBuilder<RetailPeriodCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailPeriodCodes`.
   * @param code Key property. See {@link RetailPeriodCodes.code}.
   * @returns A request builder for creating requests that delete an entity of type `RetailPeriodCodes`.
   */
  delete(code: string): DeleteRequestBuilder<RetailPeriodCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailPeriodCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailPeriodCodes` by taking the entity as a parameter.
   */
  delete(
    entity: RetailPeriodCodes<T>
  ): DeleteRequestBuilder<RetailPeriodCodes<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<RetailPeriodCodes<T>, T> {
    return new DeleteRequestBuilder<RetailPeriodCodes<T>, T>(
      this.entityApi,
      codeOrEntity instanceof RetailPeriodCodes
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}
