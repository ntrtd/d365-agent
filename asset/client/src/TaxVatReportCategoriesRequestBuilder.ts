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
import { TaxVatReportCategories } from './TaxVatReportCategories';

/**
 * Request builder class for operations supported on the {@link TaxVatReportCategories} entity.
 */
export class TaxVatReportCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxVatReportCategories<T>, T> {
  /**
   * Returns a request builder for querying all `TaxVatReportCategories` entities.
   * @returns A request builder for creating requests to retrieve all `TaxVatReportCategories` entities.
   */
  getAll(): GetAllRequestBuilder<TaxVatReportCategories<T>, T> {
    return new GetAllRequestBuilder<TaxVatReportCategories<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TaxVatReportCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxVatReportCategories`.
   */
  create(
    entity: TaxVatReportCategories<T>
  ): CreateRequestBuilder<TaxVatReportCategories<T>, T> {
    return new CreateRequestBuilder<TaxVatReportCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxVatReportCategories` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxVatReportCategories.dataAreaId}.
   * @param categoryCodeId Key property. See {@link TaxVatReportCategories.categoryCodeId}.
   * @returns A request builder for creating requests to retrieve one `TaxVatReportCategories` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    categoryCodeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxVatReportCategories<T>, T> {
    return new GetByKeyRequestBuilder<TaxVatReportCategories<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CategoryCodeID: categoryCodeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxVatReportCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxVatReportCategories`.
   */
  update(
    entity: TaxVatReportCategories<T>
  ): UpdateRequestBuilder<TaxVatReportCategories<T>, T> {
    return new UpdateRequestBuilder<TaxVatReportCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxVatReportCategories`.
   * @param dataAreaId Key property. See {@link TaxVatReportCategories.dataAreaId}.
   * @param categoryCodeId Key property. See {@link TaxVatReportCategories.categoryCodeId}.
   * @returns A request builder for creating requests that delete an entity of type `TaxVatReportCategories`.
   */
  delete(
    dataAreaId: string,
    categoryCodeId: string
  ): DeleteRequestBuilder<TaxVatReportCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxVatReportCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxVatReportCategories` by taking the entity as a parameter.
   */
  delete(
    entity: TaxVatReportCategories<T>
  ): DeleteRequestBuilder<TaxVatReportCategories<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    categoryCodeId?: string
  ): DeleteRequestBuilder<TaxVatReportCategories<T>, T> {
    return new DeleteRequestBuilder<TaxVatReportCategories<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxVatReportCategories
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CategoryCodeID: categoryCodeId!
          }
    );
  }
}
