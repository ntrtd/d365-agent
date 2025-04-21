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
import { AccrualSchemes } from './AccrualSchemes';

/**
 * Request builder class for operations supported on the {@link AccrualSchemes} entity.
 */
export class AccrualSchemesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AccrualSchemes<T>, T> {
  /**
   * Returns a request builder for querying all `AccrualSchemes` entities.
   * @returns A request builder for creating requests to retrieve all `AccrualSchemes` entities.
   */
  getAll(): GetAllRequestBuilder<AccrualSchemes<T>, T> {
    return new GetAllRequestBuilder<AccrualSchemes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AccrualSchemes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccrualSchemes`.
   */
  create(
    entity: AccrualSchemes<T>
  ): CreateRequestBuilder<AccrualSchemes<T>, T> {
    return new CreateRequestBuilder<AccrualSchemes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AccrualSchemes` entity based on its keys.
   * @param dataAreaId Key property. See {@link AccrualSchemes.dataAreaId}.
   * @param accrualIdentification Key property. See {@link AccrualSchemes.accrualIdentification}.
   * @returns A request builder for creating requests to retrieve one `AccrualSchemes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accrualIdentification: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AccrualSchemes<T>, T> {
    return new GetByKeyRequestBuilder<AccrualSchemes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AccrualIdentification: accrualIdentification
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AccrualSchemes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccrualSchemes`.
   */
  update(
    entity: AccrualSchemes<T>
  ): UpdateRequestBuilder<AccrualSchemes<T>, T> {
    return new UpdateRequestBuilder<AccrualSchemes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AccrualSchemes`.
   * @param dataAreaId Key property. See {@link AccrualSchemes.dataAreaId}.
   * @param accrualIdentification Key property. See {@link AccrualSchemes.accrualIdentification}.
   * @returns A request builder for creating requests that delete an entity of type `AccrualSchemes`.
   */
  delete(
    dataAreaId: string,
    accrualIdentification: string
  ): DeleteRequestBuilder<AccrualSchemes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AccrualSchemes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccrualSchemes` by taking the entity as a parameter.
   */
  delete(entity: AccrualSchemes<T>): DeleteRequestBuilder<AccrualSchemes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accrualIdentification?: string
  ): DeleteRequestBuilder<AccrualSchemes<T>, T> {
    return new DeleteRequestBuilder<AccrualSchemes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AccrualSchemes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccrualIdentification: accrualIdentification!
          }
    );
  }
}
