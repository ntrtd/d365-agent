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
import { TaxFringeVariations } from './TaxFringeVariations';

/**
 * Request builder class for operations supported on the {@link TaxFringeVariations} entity.
 */
export class TaxFringeVariationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxFringeVariations<T>, T> {
  /**
   * Returns a request builder for querying all `TaxFringeVariations` entities.
   * @returns A request builder for creating requests to retrieve all `TaxFringeVariations` entities.
   */
  getAll(): GetAllRequestBuilder<TaxFringeVariations<T>, T> {
    return new GetAllRequestBuilder<TaxFringeVariations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxFringeVariations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxFringeVariations`.
   */
  create(
    entity: TaxFringeVariations<T>
  ): CreateRequestBuilder<TaxFringeVariations<T>, T> {
    return new CreateRequestBuilder<TaxFringeVariations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxFringeVariations` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxFringeVariations.dataAreaId}.
   * @param reasonCode Key property. See {@link TaxFringeVariations.reasonCode}.
   * @returns A request builder for creating requests to retrieve one `TaxFringeVariations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reasonCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxFringeVariations<T>, T> {
    return new GetByKeyRequestBuilder<TaxFringeVariations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ReasonCode: reasonCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxFringeVariations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxFringeVariations`.
   */
  update(
    entity: TaxFringeVariations<T>
  ): UpdateRequestBuilder<TaxFringeVariations<T>, T> {
    return new UpdateRequestBuilder<TaxFringeVariations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxFringeVariations`.
   * @param dataAreaId Key property. See {@link TaxFringeVariations.dataAreaId}.
   * @param reasonCode Key property. See {@link TaxFringeVariations.reasonCode}.
   * @returns A request builder for creating requests that delete an entity of type `TaxFringeVariations`.
   */
  delete(
    dataAreaId: string,
    reasonCode: string
  ): DeleteRequestBuilder<TaxFringeVariations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxFringeVariations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxFringeVariations` by taking the entity as a parameter.
   */
  delete(
    entity: TaxFringeVariations<T>
  ): DeleteRequestBuilder<TaxFringeVariations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    reasonCode?: string
  ): DeleteRequestBuilder<TaxFringeVariations<T>, T> {
    return new DeleteRequestBuilder<TaxFringeVariations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxFringeVariations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReasonCode: reasonCode!
          }
    );
  }
}
