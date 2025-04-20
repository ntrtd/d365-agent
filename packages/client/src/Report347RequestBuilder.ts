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
import { Report347 } from './Report347';
import { TaxRep347OperationKey } from './TaxRep347OperationKey';

/**
 * Request builder class for operations supported on the {@link Report347} entity.
 */
export class Report347RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Report347<T>, T> {
  /**
   * Returns a request builder for querying all `Report347` entities.
   * @returns A request builder for creating requests to retrieve all `Report347` entities.
   */
  getAll(): GetAllRequestBuilder<Report347<T>, T> {
    return new GetAllRequestBuilder<Report347<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Report347` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Report347`.
   */
  create(entity: Report347<T>): CreateRequestBuilder<Report347<T>, T> {
    return new CreateRequestBuilder<Report347<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Report347` entity based on its keys.
   * @param dataAreaId Key property. See {@link Report347.dataAreaId}.
   * @param fiscalYear Key property. See {@link Report347.fiscalYear}.
   * @param referenceOfEstate Key property. See {@link Report347.referenceOfEstate}.
   * @param invoiceYearForCash Key property. See {@link Report347.invoiceYearForCash}.
   * @param taxExemptNumberTrans Key property. See {@link Report347.taxExemptNumberTrans}.
   * @param taskCode Key property. See {@link Report347.taskCode}.
   * @param countryRegionTrans Key property. See {@link Report347.countryRegionTrans}.
   * @returns A request builder for creating requests to retrieve one `Report347` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fiscalYear: DeserializedType<T, 'Edm.Int32'>,
    referenceOfEstate: DeserializedType<T, 'Edm.String'>,
    invoiceYearForCash: DeserializedType<T, 'Edm.Int32'>,
    taxExemptNumberTrans: DeserializedType<T, 'Edm.String'>,
    taskCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TaxRep347OperationKey'
    >,
    countryRegionTrans: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Report347<T>, T> {
    return new GetByKeyRequestBuilder<Report347<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FiscalYear: fiscalYear,
      ReferenceOfEstate: referenceOfEstate,
      InvoiceYearForCash: invoiceYearForCash,
      TaxExemptNumberTrans: taxExemptNumberTrans,
      TaskCode: taskCode,
      CountryRegionTrans: countryRegionTrans
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Report347`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Report347`.
   */
  update(entity: Report347<T>): UpdateRequestBuilder<Report347<T>, T> {
    return new UpdateRequestBuilder<Report347<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Report347`.
   * @param dataAreaId Key property. See {@link Report347.dataAreaId}.
   * @param fiscalYear Key property. See {@link Report347.fiscalYear}.
   * @param referenceOfEstate Key property. See {@link Report347.referenceOfEstate}.
   * @param invoiceYearForCash Key property. See {@link Report347.invoiceYearForCash}.
   * @param taxExemptNumberTrans Key property. See {@link Report347.taxExemptNumberTrans}.
   * @param taskCode Key property. See {@link Report347.taskCode}.
   * @param countryRegionTrans Key property. See {@link Report347.countryRegionTrans}.
   * @returns A request builder for creating requests that delete an entity of type `Report347`.
   */
  delete(
    dataAreaId: string,
    fiscalYear: number,
    referenceOfEstate: string,
    invoiceYearForCash: number,
    taxExemptNumberTrans: string,
    taskCode: TaxRep347OperationKey,
    countryRegionTrans: string
  ): DeleteRequestBuilder<Report347<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Report347`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Report347` by taking the entity as a parameter.
   */
  delete(entity: Report347<T>): DeleteRequestBuilder<Report347<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fiscalYear?: number,
    referenceOfEstate?: string,
    invoiceYearForCash?: number,
    taxExemptNumberTrans?: string,
    taskCode?: TaxRep347OperationKey,
    countryRegionTrans?: string
  ): DeleteRequestBuilder<Report347<T>, T> {
    return new DeleteRequestBuilder<Report347<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Report347
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FiscalYear: fiscalYear!,
            ReferenceOfEstate: referenceOfEstate!,
            InvoiceYearForCash: invoiceYearForCash!,
            TaxExemptNumberTrans: taxExemptNumberTrans!,
            TaskCode: taskCode!,
            CountryRegionTrans: countryRegionTrans!
          }
    );
  }
}
