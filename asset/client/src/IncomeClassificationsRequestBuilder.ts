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
import { IncomeClassifications } from './IncomeClassifications';

/**
 * Request builder class for operations supported on the {@link IncomeClassifications} entity.
 */
export class IncomeClassificationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IncomeClassifications<T>, T> {
  /**
   * Returns a request builder for querying all `IncomeClassifications` entities.
   * @returns A request builder for creating requests to retrieve all `IncomeClassifications` entities.
   */
  getAll(): GetAllRequestBuilder<IncomeClassifications<T>, T> {
    return new GetAllRequestBuilder<IncomeClassifications<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `IncomeClassifications` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IncomeClassifications`.
   */
  create(
    entity: IncomeClassifications<T>
  ): CreateRequestBuilder<IncomeClassifications<T>, T> {
    return new CreateRequestBuilder<IncomeClassifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IncomeClassifications` entity based on its keys.
   * @param codeId Key property. See {@link IncomeClassifications.codeId}.
   * @returns A request builder for creating requests to retrieve one `IncomeClassifications` entity based on its keys.
   */
  getByKey(
    codeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IncomeClassifications<T>, T> {
    return new GetByKeyRequestBuilder<IncomeClassifications<T>, T>(
      this.entityApi,
      { CodeId: codeId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `IncomeClassifications`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IncomeClassifications`.
   */
  update(
    entity: IncomeClassifications<T>
  ): UpdateRequestBuilder<IncomeClassifications<T>, T> {
    return new UpdateRequestBuilder<IncomeClassifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IncomeClassifications`.
   * @param codeId Key property. See {@link IncomeClassifications.codeId}.
   * @returns A request builder for creating requests that delete an entity of type `IncomeClassifications`.
   */
  delete(codeId: string): DeleteRequestBuilder<IncomeClassifications<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IncomeClassifications`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IncomeClassifications` by taking the entity as a parameter.
   */
  delete(
    entity: IncomeClassifications<T>
  ): DeleteRequestBuilder<IncomeClassifications<T>, T>;
  delete(
    codeIdOrEntity: any
  ): DeleteRequestBuilder<IncomeClassifications<T>, T> {
    return new DeleteRequestBuilder<IncomeClassifications<T>, T>(
      this.entityApi,
      codeIdOrEntity instanceof IncomeClassifications
        ? codeIdOrEntity
        : { CodeId: codeIdOrEntity! }
    );
  }
}
