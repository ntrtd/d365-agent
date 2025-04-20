/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { SalesAutomaticSalesDocumentHeaderCharges } from './SalesAutomaticSalesDocumentHeaderCharges';

/**
 * Request builder class for operations supported on the {@link SalesAutomaticSalesDocumentHeaderCharges} entity.
 */
export class SalesAutomaticSalesDocumentHeaderChargesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesAutomaticSalesDocumentHeaderCharges<T>, T> {
  /**
   * Returns a request builder for querying all `SalesAutomaticSalesDocumentHeaderCharges` entities.
   * @returns A request builder for creating requests to retrieve all `SalesAutomaticSalesDocumentHeaderCharges` entities.
   */
  getAll(): GetAllRequestBuilder<
    SalesAutomaticSalesDocumentHeaderCharges<T>,
    T
  > {
    return new GetAllRequestBuilder<
      SalesAutomaticSalesDocumentHeaderCharges<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesAutomaticSalesDocumentHeaderCharges` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesAutomaticSalesDocumentHeaderCharges`.
   */
  create(
    entity: SalesAutomaticSalesDocumentHeaderCharges<T>
  ): CreateRequestBuilder<SalesAutomaticSalesDocumentHeaderCharges<T>, T> {
    return new CreateRequestBuilder<
      SalesAutomaticSalesDocumentHeaderCharges<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SalesAutomaticSalesDocumentHeaderCharges` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesAutomaticSalesDocumentHeaderCharges.dataAreaId}.
   * @param description Key property. See {@link SalesAutomaticSalesDocumentHeaderCharges.description}.
   * @param lineNumber Key property. See {@link SalesAutomaticSalesDocumentHeaderCharges.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `SalesAutomaticSalesDocumentHeaderCharges` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    description: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<SalesAutomaticSalesDocumentHeaderCharges<T>, T> {
    return new GetByKeyRequestBuilder<
      SalesAutomaticSalesDocumentHeaderCharges<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Description: description,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesAutomaticSalesDocumentHeaderCharges`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesAutomaticSalesDocumentHeaderCharges`.
   */
  update(
    entity: SalesAutomaticSalesDocumentHeaderCharges<T>
  ): UpdateRequestBuilder<SalesAutomaticSalesDocumentHeaderCharges<T>, T> {
    return new UpdateRequestBuilder<
      SalesAutomaticSalesDocumentHeaderCharges<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesAutomaticSalesDocumentHeaderCharges`.
   * @param dataAreaId Key property. See {@link SalesAutomaticSalesDocumentHeaderCharges.dataAreaId}.
   * @param description Key property. See {@link SalesAutomaticSalesDocumentHeaderCharges.description}.
   * @param lineNumber Key property. See {@link SalesAutomaticSalesDocumentHeaderCharges.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SalesAutomaticSalesDocumentHeaderCharges`.
   */
  delete(
    dataAreaId: string,
    description: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<SalesAutomaticSalesDocumentHeaderCharges<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesAutomaticSalesDocumentHeaderCharges`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesAutomaticSalesDocumentHeaderCharges` by taking the entity as a parameter.
   */
  delete(
    entity: SalesAutomaticSalesDocumentHeaderCharges<T>
  ): DeleteRequestBuilder<SalesAutomaticSalesDocumentHeaderCharges<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    description?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<SalesAutomaticSalesDocumentHeaderCharges<T>, T> {
    return new DeleteRequestBuilder<
      SalesAutomaticSalesDocumentHeaderCharges<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesAutomaticSalesDocumentHeaderCharges
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Description: description!,
            LineNumber: lineNumber!
          }
    );
  }
}
