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
import { TaxPayAsYouGoVariations } from './TaxPayAsYouGoVariations';

/**
 * Request builder class for operations supported on the {@link TaxPayAsYouGoVariations} entity.
 */
export class TaxPayAsYouGoVariationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxPayAsYouGoVariations<T>, T> {
  /**
   * Returns a request builder for querying all `TaxPayAsYouGoVariations` entities.
   * @returns A request builder for creating requests to retrieve all `TaxPayAsYouGoVariations` entities.
   */
  getAll(): GetAllRequestBuilder<TaxPayAsYouGoVariations<T>, T> {
    return new GetAllRequestBuilder<TaxPayAsYouGoVariations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TaxPayAsYouGoVariations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxPayAsYouGoVariations`.
   */
  create(
    entity: TaxPayAsYouGoVariations<T>
  ): CreateRequestBuilder<TaxPayAsYouGoVariations<T>, T> {
    return new CreateRequestBuilder<TaxPayAsYouGoVariations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxPayAsYouGoVariations` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxPayAsYouGoVariations.dataAreaId}.
   * @param reasonCode Key property. See {@link TaxPayAsYouGoVariations.reasonCode}.
   * @returns A request builder for creating requests to retrieve one `TaxPayAsYouGoVariations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reasonCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxPayAsYouGoVariations<T>, T> {
    return new GetByKeyRequestBuilder<TaxPayAsYouGoVariations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ReasonCode: reasonCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxPayAsYouGoVariations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxPayAsYouGoVariations`.
   */
  update(
    entity: TaxPayAsYouGoVariations<T>
  ): UpdateRequestBuilder<TaxPayAsYouGoVariations<T>, T> {
    return new UpdateRequestBuilder<TaxPayAsYouGoVariations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxPayAsYouGoVariations`.
   * @param dataAreaId Key property. See {@link TaxPayAsYouGoVariations.dataAreaId}.
   * @param reasonCode Key property. See {@link TaxPayAsYouGoVariations.reasonCode}.
   * @returns A request builder for creating requests that delete an entity of type `TaxPayAsYouGoVariations`.
   */
  delete(
    dataAreaId: string,
    reasonCode: string
  ): DeleteRequestBuilder<TaxPayAsYouGoVariations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxPayAsYouGoVariations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxPayAsYouGoVariations` by taking the entity as a parameter.
   */
  delete(
    entity: TaxPayAsYouGoVariations<T>
  ): DeleteRequestBuilder<TaxPayAsYouGoVariations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    reasonCode?: string
  ): DeleteRequestBuilder<TaxPayAsYouGoVariations<T>, T> {
    return new DeleteRequestBuilder<TaxPayAsYouGoVariations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxPayAsYouGoVariations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReasonCode: reasonCode!
          }
    );
  }
}
