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
import { LtmTaxApplications } from './LtmTaxApplications';

/**
 * Request builder class for operations supported on the {@link LtmTaxApplications} entity.
 */
export class LtmTaxApplicationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmTaxApplications<T>, T> {
  /**
   * Returns a request builder for querying all `LtmTaxApplications` entities.
   * @returns A request builder for creating requests to retrieve all `LtmTaxApplications` entities.
   */
  getAll(): GetAllRequestBuilder<LtmTaxApplications<T>, T> {
    return new GetAllRequestBuilder<LtmTaxApplications<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmTaxApplications` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmTaxApplications`.
   */
  create(
    entity: LtmTaxApplications<T>
  ): CreateRequestBuilder<LtmTaxApplications<T>, T> {
    return new CreateRequestBuilder<LtmTaxApplications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmTaxApplications` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmTaxApplications.dataAreaId}.
   * @param taxApplicationId Key property. See {@link LtmTaxApplications.taxApplicationId}.
   * @returns A request builder for creating requests to retrieve one `LtmTaxApplications` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxApplicationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmTaxApplications<T>, T> {
    return new GetByKeyRequestBuilder<LtmTaxApplications<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TaxApplicationId: taxApplicationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmTaxApplications`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmTaxApplications`.
   */
  update(
    entity: LtmTaxApplications<T>
  ): UpdateRequestBuilder<LtmTaxApplications<T>, T> {
    return new UpdateRequestBuilder<LtmTaxApplications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmTaxApplications`.
   * @param dataAreaId Key property. See {@link LtmTaxApplications.dataAreaId}.
   * @param taxApplicationId Key property. See {@link LtmTaxApplications.taxApplicationId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmTaxApplications`.
   */
  delete(
    dataAreaId: string,
    taxApplicationId: string
  ): DeleteRequestBuilder<LtmTaxApplications<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmTaxApplications`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmTaxApplications` by taking the entity as a parameter.
   */
  delete(
    entity: LtmTaxApplications<T>
  ): DeleteRequestBuilder<LtmTaxApplications<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxApplicationId?: string
  ): DeleteRequestBuilder<LtmTaxApplications<T>, T> {
    return new DeleteRequestBuilder<LtmTaxApplications<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmTaxApplications
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxApplicationId: taxApplicationId!
          }
    );
  }
}
