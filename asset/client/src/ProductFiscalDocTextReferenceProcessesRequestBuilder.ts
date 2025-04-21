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
import { ProductFiscalDocTextReferenceProcesses } from './ProductFiscalDocTextReferenceProcesses';
import { AgencyBr } from './AgencyBr';

/**
 * Request builder class for operations supported on the {@link ProductFiscalDocTextReferenceProcesses} entity.
 */
export class ProductFiscalDocTextReferenceProcessesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductFiscalDocTextReferenceProcesses<T>, T> {
  /**
   * Returns a request builder for querying all `ProductFiscalDocTextReferenceProcesses` entities.
   * @returns A request builder for creating requests to retrieve all `ProductFiscalDocTextReferenceProcesses` entities.
   */
  getAll(): GetAllRequestBuilder<ProductFiscalDocTextReferenceProcesses<T>, T> {
    return new GetAllRequestBuilder<
      ProductFiscalDocTextReferenceProcesses<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductFiscalDocTextReferenceProcesses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductFiscalDocTextReferenceProcesses`.
   */
  create(
    entity: ProductFiscalDocTextReferenceProcesses<T>
  ): CreateRequestBuilder<ProductFiscalDocTextReferenceProcesses<T>, T> {
    return new CreateRequestBuilder<
      ProductFiscalDocTextReferenceProcesses<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProductFiscalDocTextReferenceProcesses` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductFiscalDocTextReferenceProcesses.dataAreaId}.
   * @param item Key property. See {@link ProductFiscalDocTextReferenceProcesses.item}.
   * @param fiscalDocumentText Key property. See {@link ProductFiscalDocTextReferenceProcesses.fiscalDocumentText}.
   * @param agency Key property. See {@link ProductFiscalDocTextReferenceProcesses.agency}.
   * @param processNumber Key property. See {@link ProductFiscalDocTextReferenceProcesses.processNumber}.
   * @returns A request builder for creating requests to retrieve one `ProductFiscalDocTextReferenceProcesses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    item: DeserializedType<T, 'Edm.String'>,
    fiscalDocumentText: DeserializedType<T, 'Edm.String'>,
    agency: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.Agency_BR'>,
    processNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductFiscalDocTextReferenceProcesses<T>, T> {
    return new GetByKeyRequestBuilder<
      ProductFiscalDocTextReferenceProcesses<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Item: item,
      FiscalDocumentText: fiscalDocumentText,
      Agency: agency,
      ProcessNumber: processNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductFiscalDocTextReferenceProcesses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductFiscalDocTextReferenceProcesses`.
   */
  update(
    entity: ProductFiscalDocTextReferenceProcesses<T>
  ): UpdateRequestBuilder<ProductFiscalDocTextReferenceProcesses<T>, T> {
    return new UpdateRequestBuilder<
      ProductFiscalDocTextReferenceProcesses<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductFiscalDocTextReferenceProcesses`.
   * @param dataAreaId Key property. See {@link ProductFiscalDocTextReferenceProcesses.dataAreaId}.
   * @param item Key property. See {@link ProductFiscalDocTextReferenceProcesses.item}.
   * @param fiscalDocumentText Key property. See {@link ProductFiscalDocTextReferenceProcesses.fiscalDocumentText}.
   * @param agency Key property. See {@link ProductFiscalDocTextReferenceProcesses.agency}.
   * @param processNumber Key property. See {@link ProductFiscalDocTextReferenceProcesses.processNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProductFiscalDocTextReferenceProcesses`.
   */
  delete(
    dataAreaId: string,
    item: string,
    fiscalDocumentText: string,
    agency: AgencyBr,
    processNumber: string
  ): DeleteRequestBuilder<ProductFiscalDocTextReferenceProcesses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductFiscalDocTextReferenceProcesses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductFiscalDocTextReferenceProcesses` by taking the entity as a parameter.
   */
  delete(
    entity: ProductFiscalDocTextReferenceProcesses<T>
  ): DeleteRequestBuilder<ProductFiscalDocTextReferenceProcesses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    item?: string,
    fiscalDocumentText?: string,
    agency?: AgencyBr,
    processNumber?: string
  ): DeleteRequestBuilder<ProductFiscalDocTextReferenceProcesses<T>, T> {
    return new DeleteRequestBuilder<
      ProductFiscalDocTextReferenceProcesses<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductFiscalDocTextReferenceProcesses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Item: item!,
            FiscalDocumentText: fiscalDocumentText!,
            Agency: agency!,
            ProcessNumber: processNumber!
          }
    );
  }
}
