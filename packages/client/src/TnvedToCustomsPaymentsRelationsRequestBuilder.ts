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
import { TnvedToCustomsPaymentsRelations } from './TnvedToCustomsPaymentsRelations';
import { CustomAllImportExportRu } from './CustomAllImportExportRu';

/**
 * Request builder class for operations supported on the {@link TnvedToCustomsPaymentsRelations} entity.
 */
export class TnvedToCustomsPaymentsRelationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TnvedToCustomsPaymentsRelations<T>, T> {
  /**
   * Returns a request builder for querying all `TnvedToCustomsPaymentsRelations` entities.
   * @returns A request builder for creating requests to retrieve all `TnvedToCustomsPaymentsRelations` entities.
   */
  getAll(): GetAllRequestBuilder<TnvedToCustomsPaymentsRelations<T>, T> {
    return new GetAllRequestBuilder<TnvedToCustomsPaymentsRelations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TnvedToCustomsPaymentsRelations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TnvedToCustomsPaymentsRelations`.
   */
  create(
    entity: TnvedToCustomsPaymentsRelations<T>
  ): CreateRequestBuilder<TnvedToCustomsPaymentsRelations<T>, T> {
    return new CreateRequestBuilder<TnvedToCustomsPaymentsRelations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TnvedToCustomsPaymentsRelations` entity based on its keys.
   * @param dataAreaId Key property. See {@link TnvedToCustomsPaymentsRelations.dataAreaId}.
   * @param fromDate Key property. See {@link TnvedToCustomsPaymentsRelations.fromDate}.
   * @param tnVedCode Key property. See {@link TnvedToCustomsPaymentsRelations.tnVedCode}.
   * @param direction Key property. See {@link TnvedToCustomsPaymentsRelations.direction}.
   * @param countryRegionId Key property. See {@link TnvedToCustomsPaymentsRelations.countryRegionId}.
   * @param vat Key property. See {@link TnvedToCustomsPaymentsRelations.vat}.
   * @returns A request builder for creating requests to retrieve one `TnvedToCustomsPaymentsRelations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    tnVedCode: DeserializedType<T, 'Edm.String'>,
    direction: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CustomAllImportExport_RU'
    >,
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    vat: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TnvedToCustomsPaymentsRelations<T>, T> {
    return new GetByKeyRequestBuilder<TnvedToCustomsPaymentsRelations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FromDate: fromDate,
        TnVedCode: tnVedCode,
        Direction: direction,
        CountryRegionId: countryRegionId,
        VAT: vat
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TnvedToCustomsPaymentsRelations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TnvedToCustomsPaymentsRelations`.
   */
  update(
    entity: TnvedToCustomsPaymentsRelations<T>
  ): UpdateRequestBuilder<TnvedToCustomsPaymentsRelations<T>, T> {
    return new UpdateRequestBuilder<TnvedToCustomsPaymentsRelations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TnvedToCustomsPaymentsRelations`.
   * @param dataAreaId Key property. See {@link TnvedToCustomsPaymentsRelations.dataAreaId}.
   * @param fromDate Key property. See {@link TnvedToCustomsPaymentsRelations.fromDate}.
   * @param tnVedCode Key property. See {@link TnvedToCustomsPaymentsRelations.tnVedCode}.
   * @param direction Key property. See {@link TnvedToCustomsPaymentsRelations.direction}.
   * @param countryRegionId Key property. See {@link TnvedToCustomsPaymentsRelations.countryRegionId}.
   * @param vat Key property. See {@link TnvedToCustomsPaymentsRelations.vat}.
   * @returns A request builder for creating requests that delete an entity of type `TnvedToCustomsPaymentsRelations`.
   */
  delete(
    dataAreaId: string,
    fromDate: Moment,
    tnVedCode: string,
    direction: CustomAllImportExportRu,
    countryRegionId: string,
    vat: string
  ): DeleteRequestBuilder<TnvedToCustomsPaymentsRelations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TnvedToCustomsPaymentsRelations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TnvedToCustomsPaymentsRelations` by taking the entity as a parameter.
   */
  delete(
    entity: TnvedToCustomsPaymentsRelations<T>
  ): DeleteRequestBuilder<TnvedToCustomsPaymentsRelations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fromDate?: Moment,
    tnVedCode?: string,
    direction?: CustomAllImportExportRu,
    countryRegionId?: string,
    vat?: string
  ): DeleteRequestBuilder<TnvedToCustomsPaymentsRelations<T>, T> {
    return new DeleteRequestBuilder<TnvedToCustomsPaymentsRelations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TnvedToCustomsPaymentsRelations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FromDate: fromDate!,
            TnVedCode: tnVedCode!,
            Direction: direction!,
            CountryRegionId: countryRegionId!,
            VAT: vat!
          }
    );
  }
}
