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
import { AutoTaxHeaders } from './AutoTaxHeaders';

/**
 * Request builder class for operations supported on the {@link AutoTaxHeaders} entity.
 */
export class AutoTaxHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AutoTaxHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `AutoTaxHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `AutoTaxHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<AutoTaxHeaders<T>, T> {
    return new GetAllRequestBuilder<AutoTaxHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AutoTaxHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AutoTaxHeaders`.
   */
  create(
    entity: AutoTaxHeaders<T>
  ): CreateRequestBuilder<AutoTaxHeaders<T>, T> {
    return new CreateRequestBuilder<AutoTaxHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AutoTaxHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link AutoTaxHeaders.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `AutoTaxHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AutoTaxHeaders<T>, T> {
    return new GetByKeyRequestBuilder<AutoTaxHeaders<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AutoTaxHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AutoTaxHeaders`.
   */
  update(
    entity: AutoTaxHeaders<T>
  ): UpdateRequestBuilder<AutoTaxHeaders<T>, T> {
    return new UpdateRequestBuilder<AutoTaxHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AutoTaxHeaders`.
   * @param dataAreaId Key property. See {@link AutoTaxHeaders.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `AutoTaxHeaders`.
   */
  delete(dataAreaId: string): DeleteRequestBuilder<AutoTaxHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AutoTaxHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AutoTaxHeaders` by taking the entity as a parameter.
   */
  delete(entity: AutoTaxHeaders<T>): DeleteRequestBuilder<AutoTaxHeaders<T>, T>;
  delete(dataAreaIdOrEntity: any): DeleteRequestBuilder<AutoTaxHeaders<T>, T> {
    return new DeleteRequestBuilder<AutoTaxHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AutoTaxHeaders
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
