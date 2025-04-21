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
import { KittingParameters } from './KittingParameters';
import { TableGroupAll } from './TableGroupAll';

/**
 * Request builder class for operations supported on the {@link KittingParameters} entity.
 */
export class KittingParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<KittingParameters<T>, T> {
  /**
   * Returns a request builder for querying all `KittingParameters` entities.
   * @returns A request builder for creating requests to retrieve all `KittingParameters` entities.
   */
  getAll(): GetAllRequestBuilder<KittingParameters<T>, T> {
    return new GetAllRequestBuilder<KittingParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `KittingParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `KittingParameters`.
   */
  create(
    entity: KittingParameters<T>
  ): CreateRequestBuilder<KittingParameters<T>, T> {
    return new CreateRequestBuilder<KittingParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `KittingParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link KittingParameters.dataAreaId}.
   * @param validFor Key property. See {@link KittingParameters.validFor}.
   * @param itemRelation Key property. See {@link KittingParameters.itemRelation}.
   * @returns A request builder for creating requests to retrieve one `KittingParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    validFor: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    itemRelation: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<KittingParameters<T>, T> {
    return new GetByKeyRequestBuilder<KittingParameters<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ValidFor: validFor,
      ItemRelation: itemRelation
    });
  }

  /**
   * Returns a request builder for updating an entity of type `KittingParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `KittingParameters`.
   */
  update(
    entity: KittingParameters<T>
  ): UpdateRequestBuilder<KittingParameters<T>, T> {
    return new UpdateRequestBuilder<KittingParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `KittingParameters`.
   * @param dataAreaId Key property. See {@link KittingParameters.dataAreaId}.
   * @param validFor Key property. See {@link KittingParameters.validFor}.
   * @param itemRelation Key property. See {@link KittingParameters.itemRelation}.
   * @returns A request builder for creating requests that delete an entity of type `KittingParameters`.
   */
  delete(
    dataAreaId: string,
    validFor: TableGroupAll,
    itemRelation: string
  ): DeleteRequestBuilder<KittingParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `KittingParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `KittingParameters` by taking the entity as a parameter.
   */
  delete(
    entity: KittingParameters<T>
  ): DeleteRequestBuilder<KittingParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    validFor?: TableGroupAll,
    itemRelation?: string
  ): DeleteRequestBuilder<KittingParameters<T>, T> {
    return new DeleteRequestBuilder<KittingParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof KittingParameters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ValidFor: validFor!,
            ItemRelation: itemRelation!
          }
    );
  }
}
