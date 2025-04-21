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
import { TrvExpMobileTaxGroups } from './TrvExpMobileTaxGroups';

/**
 * Request builder class for operations supported on the {@link TrvExpMobileTaxGroups} entity.
 */
export class TrvExpMobileTaxGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TrvExpMobileTaxGroups<T>, T> {
  /**
   * Returns a request builder for querying all `TrvExpMobileTaxGroups` entities.
   * @returns A request builder for creating requests to retrieve all `TrvExpMobileTaxGroups` entities.
   */
  getAll(): GetAllRequestBuilder<TrvExpMobileTaxGroups<T>, T> {
    return new GetAllRequestBuilder<TrvExpMobileTaxGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TrvExpMobileTaxGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TrvExpMobileTaxGroups`.
   */
  create(
    entity: TrvExpMobileTaxGroups<T>
  ): CreateRequestBuilder<TrvExpMobileTaxGroups<T>, T> {
    return new CreateRequestBuilder<TrvExpMobileTaxGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TrvExpMobileTaxGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link TrvExpMobileTaxGroups.dataAreaId}.
   * @param salesTaxGroup Key property. See {@link TrvExpMobileTaxGroups.salesTaxGroup}.
   * @returns A request builder for creating requests to retrieve one `TrvExpMobileTaxGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesTaxGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TrvExpMobileTaxGroups<T>, T> {
    return new GetByKeyRequestBuilder<TrvExpMobileTaxGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesTaxGroup: salesTaxGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TrvExpMobileTaxGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TrvExpMobileTaxGroups`.
   */
  update(
    entity: TrvExpMobileTaxGroups<T>
  ): UpdateRequestBuilder<TrvExpMobileTaxGroups<T>, T> {
    return new UpdateRequestBuilder<TrvExpMobileTaxGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TrvExpMobileTaxGroups`.
   * @param dataAreaId Key property. See {@link TrvExpMobileTaxGroups.dataAreaId}.
   * @param salesTaxGroup Key property. See {@link TrvExpMobileTaxGroups.salesTaxGroup}.
   * @returns A request builder for creating requests that delete an entity of type `TrvExpMobileTaxGroups`.
   */
  delete(
    dataAreaId: string,
    salesTaxGroup: string
  ): DeleteRequestBuilder<TrvExpMobileTaxGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TrvExpMobileTaxGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TrvExpMobileTaxGroups` by taking the entity as a parameter.
   */
  delete(
    entity: TrvExpMobileTaxGroups<T>
  ): DeleteRequestBuilder<TrvExpMobileTaxGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesTaxGroup?: string
  ): DeleteRequestBuilder<TrvExpMobileTaxGroups<T>, T> {
    return new DeleteRequestBuilder<TrvExpMobileTaxGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TrvExpMobileTaxGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesTaxGroup: salesTaxGroup!
          }
    );
  }
}
