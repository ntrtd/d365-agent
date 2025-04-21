/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { TaxReportSetOffHierarchySetups } from './TaxReportSetOffHierarchySetups';

/**
 * Request builder class for operations supported on the {@link TaxReportSetOffHierarchySetups} entity.
 */
export class TaxReportSetOffHierarchySetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxReportSetOffHierarchySetups<T>, T> {
  /**
   * Returns a request builder for querying all `TaxReportSetOffHierarchySetups` entities.
   * @returns A request builder for creating requests to retrieve all `TaxReportSetOffHierarchySetups` entities.
   */
  getAll(): GetAllRequestBuilder<TaxReportSetOffHierarchySetups<T>, T> {
    return new GetAllRequestBuilder<TaxReportSetOffHierarchySetups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TaxReportSetOffHierarchySetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxReportSetOffHierarchySetups`.
   */
  create(
    entity: TaxReportSetOffHierarchySetups<T>
  ): CreateRequestBuilder<TaxReportSetOffHierarchySetups<T>, T> {
    return new CreateRequestBuilder<TaxReportSetOffHierarchySetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxReportSetOffHierarchySetups` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxReportSetOffHierarchySetups.dataAreaId}.
   * @param effectiveDate Key property. See {@link TaxReportSetOffHierarchySetups.effectiveDate}.
   * @returns A request builder for creating requests to retrieve one `TaxReportSetOffHierarchySetups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<TaxReportSetOffHierarchySetups<T>, T> {
    return new GetByKeyRequestBuilder<TaxReportSetOffHierarchySetups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        EffectiveDate: effectiveDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxReportSetOffHierarchySetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxReportSetOffHierarchySetups`.
   */
  update(
    entity: TaxReportSetOffHierarchySetups<T>
  ): UpdateRequestBuilder<TaxReportSetOffHierarchySetups<T>, T> {
    return new UpdateRequestBuilder<TaxReportSetOffHierarchySetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxReportSetOffHierarchySetups`.
   * @param dataAreaId Key property. See {@link TaxReportSetOffHierarchySetups.dataAreaId}.
   * @param effectiveDate Key property. See {@link TaxReportSetOffHierarchySetups.effectiveDate}.
   * @returns A request builder for creating requests that delete an entity of type `TaxReportSetOffHierarchySetups`.
   */
  delete(
    dataAreaId: string,
    effectiveDate: Moment
  ): DeleteRequestBuilder<TaxReportSetOffHierarchySetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxReportSetOffHierarchySetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxReportSetOffHierarchySetups` by taking the entity as a parameter.
   */
  delete(
    entity: TaxReportSetOffHierarchySetups<T>
  ): DeleteRequestBuilder<TaxReportSetOffHierarchySetups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    effectiveDate?: Moment
  ): DeleteRequestBuilder<TaxReportSetOffHierarchySetups<T>, T> {
    return new DeleteRequestBuilder<TaxReportSetOffHierarchySetups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxReportSetOffHierarchySetups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EffectiveDate: effectiveDate!
          }
    );
  }
}
