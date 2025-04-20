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
import { WithholdReportSetups } from './WithholdReportSetups';
import { TaxWithholdVendorTypeTh } from './TaxWithholdVendorTypeTh';
import { TaxWithholdReportLayoutTh } from './TaxWithholdReportLayoutTh';

/**
 * Request builder class for operations supported on the {@link WithholdReportSetups} entity.
 */
export class WithholdReportSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WithholdReportSetups<T>, T> {
  /**
   * Returns a request builder for querying all `WithholdReportSetups` entities.
   * @returns A request builder for creating requests to retrieve all `WithholdReportSetups` entities.
   */
  getAll(): GetAllRequestBuilder<WithholdReportSetups<T>, T> {
    return new GetAllRequestBuilder<WithholdReportSetups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WithholdReportSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WithholdReportSetups`.
   */
  create(
    entity: WithholdReportSetups<T>
  ): CreateRequestBuilder<WithholdReportSetups<T>, T> {
    return new CreateRequestBuilder<WithholdReportSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WithholdReportSetups` entity based on its keys.
   * @param dataAreaId Key property. See {@link WithholdReportSetups.dataAreaId}.
   * @param taxWithholdVendorTypeTh Key property. See {@link WithholdReportSetups.taxWithholdVendorTypeTh}.
   * @param taxWithholdItemGroupHeadingTh Key property. See {@link WithholdReportSetups.taxWithholdItemGroupHeadingTh}.
   * @param taxWithholdReportLayoutTh Key property. See {@link WithholdReportSetups.taxWithholdReportLayoutTh}.
   * @returns A request builder for creating requests to retrieve one `WithholdReportSetups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxWithholdVendorTypeTh: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TaxWithholdVendorType_TH'
    >,
    taxWithholdItemGroupHeadingTh: DeserializedType<T, 'Edm.String'>,
    taxWithholdReportLayoutTh: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TaxWithholdReportLayout_TH'
    >
  ): GetByKeyRequestBuilder<WithholdReportSetups<T>, T> {
    return new GetByKeyRequestBuilder<WithholdReportSetups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TaxWithholdVendorType_TH: taxWithholdVendorTypeTh,
        TaxWithholdItemGroupHeading_TH: taxWithholdItemGroupHeadingTh,
        TaxWithholdReportLayout_TH: taxWithholdReportLayoutTh
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WithholdReportSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WithholdReportSetups`.
   */
  update(
    entity: WithholdReportSetups<T>
  ): UpdateRequestBuilder<WithholdReportSetups<T>, T> {
    return new UpdateRequestBuilder<WithholdReportSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WithholdReportSetups`.
   * @param dataAreaId Key property. See {@link WithholdReportSetups.dataAreaId}.
   * @param taxWithholdVendorTypeTh Key property. See {@link WithholdReportSetups.taxWithholdVendorTypeTh}.
   * @param taxWithholdItemGroupHeadingTh Key property. See {@link WithholdReportSetups.taxWithholdItemGroupHeadingTh}.
   * @param taxWithholdReportLayoutTh Key property. See {@link WithholdReportSetups.taxWithholdReportLayoutTh}.
   * @returns A request builder for creating requests that delete an entity of type `WithholdReportSetups`.
   */
  delete(
    dataAreaId: string,
    taxWithholdVendorTypeTh: TaxWithholdVendorTypeTh,
    taxWithholdItemGroupHeadingTh: string,
    taxWithholdReportLayoutTh: TaxWithholdReportLayoutTh
  ): DeleteRequestBuilder<WithholdReportSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WithholdReportSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WithholdReportSetups` by taking the entity as a parameter.
   */
  delete(
    entity: WithholdReportSetups<T>
  ): DeleteRequestBuilder<WithholdReportSetups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxWithholdVendorTypeTh?: TaxWithholdVendorTypeTh,
    taxWithholdItemGroupHeadingTh?: string,
    taxWithholdReportLayoutTh?: TaxWithholdReportLayoutTh
  ): DeleteRequestBuilder<WithholdReportSetups<T>, T> {
    return new DeleteRequestBuilder<WithholdReportSetups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WithholdReportSetups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxWithholdVendorType_TH: taxWithholdVendorTypeTh!,
            TaxWithholdItemGroupHeading_TH: taxWithholdItemGroupHeadingTh!,
            TaxWithholdReportLayout_TH: taxWithholdReportLayoutTh!
          }
    );
  }
}
