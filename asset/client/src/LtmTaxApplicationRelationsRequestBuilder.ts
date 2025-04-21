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
import { LtmTaxApplicationRelations } from './LtmTaxApplicationRelations';
import { LtmTaxEntityType } from './LtmTaxEntityType';

/**
 * Request builder class for operations supported on the {@link LtmTaxApplicationRelations} entity.
 */
export class LtmTaxApplicationRelationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmTaxApplicationRelations<T>, T> {
  /**
   * Returns a request builder for querying all `LtmTaxApplicationRelations` entities.
   * @returns A request builder for creating requests to retrieve all `LtmTaxApplicationRelations` entities.
   */
  getAll(): GetAllRequestBuilder<LtmTaxApplicationRelations<T>, T> {
    return new GetAllRequestBuilder<LtmTaxApplicationRelations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LtmTaxApplicationRelations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmTaxApplicationRelations`.
   */
  create(
    entity: LtmTaxApplicationRelations<T>
  ): CreateRequestBuilder<LtmTaxApplicationRelations<T>, T> {
    return new CreateRequestBuilder<LtmTaxApplicationRelations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmTaxApplicationRelations` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmTaxApplicationRelations.dataAreaId}.
   * @param taxApplicationId Key property. See {@link LtmTaxApplicationRelations.taxApplicationId}.
   * @param taxEntityType Key property. See {@link LtmTaxApplicationRelations.taxEntityType}.
   * @param taxEntityId Key property. See {@link LtmTaxApplicationRelations.taxEntityId}.
   * @returns A request builder for creating requests to retrieve one `LtmTaxApplicationRelations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxApplicationId: DeserializedType<T, 'Edm.String'>,
    taxEntityType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LTMTaxEntityType'
    >,
    taxEntityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmTaxApplicationRelations<T>, T> {
    return new GetByKeyRequestBuilder<LtmTaxApplicationRelations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TaxApplicationId: taxApplicationId,
        TaxEntityType: taxEntityType,
        TaxEntityId: taxEntityId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmTaxApplicationRelations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmTaxApplicationRelations`.
   */
  update(
    entity: LtmTaxApplicationRelations<T>
  ): UpdateRequestBuilder<LtmTaxApplicationRelations<T>, T> {
    return new UpdateRequestBuilder<LtmTaxApplicationRelations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmTaxApplicationRelations`.
   * @param dataAreaId Key property. See {@link LtmTaxApplicationRelations.dataAreaId}.
   * @param taxApplicationId Key property. See {@link LtmTaxApplicationRelations.taxApplicationId}.
   * @param taxEntityType Key property. See {@link LtmTaxApplicationRelations.taxEntityType}.
   * @param taxEntityId Key property. See {@link LtmTaxApplicationRelations.taxEntityId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmTaxApplicationRelations`.
   */
  delete(
    dataAreaId: string,
    taxApplicationId: string,
    taxEntityType: LtmTaxEntityType,
    taxEntityId: string
  ): DeleteRequestBuilder<LtmTaxApplicationRelations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmTaxApplicationRelations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmTaxApplicationRelations` by taking the entity as a parameter.
   */
  delete(
    entity: LtmTaxApplicationRelations<T>
  ): DeleteRequestBuilder<LtmTaxApplicationRelations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxApplicationId?: string,
    taxEntityType?: LtmTaxEntityType,
    taxEntityId?: string
  ): DeleteRequestBuilder<LtmTaxApplicationRelations<T>, T> {
    return new DeleteRequestBuilder<LtmTaxApplicationRelations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmTaxApplicationRelations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxApplicationId: taxApplicationId!,
            TaxEntityType: taxEntityType!,
            TaxEntityId: taxEntityId!
          }
    );
  }
}
