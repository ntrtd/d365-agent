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
import { SalesAutomaticSalesDocumentLineCharges } from './SalesAutomaticSalesDocumentLineCharges';

/**
 * Request builder class for operations supported on the {@link SalesAutomaticSalesDocumentLineCharges} entity.
 */
export class SalesAutomaticSalesDocumentLineChargesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesAutomaticSalesDocumentLineCharges<T>, T> {
  /**
   * Returns a request builder for querying all `SalesAutomaticSalesDocumentLineCharges` entities.
   * @returns A request builder for creating requests to retrieve all `SalesAutomaticSalesDocumentLineCharges` entities.
   */
  getAll(): GetAllRequestBuilder<SalesAutomaticSalesDocumentLineCharges<T>, T> {
    return new GetAllRequestBuilder<
      SalesAutomaticSalesDocumentLineCharges<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesAutomaticSalesDocumentLineCharges` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesAutomaticSalesDocumentLineCharges`.
   */
  create(
    entity: SalesAutomaticSalesDocumentLineCharges<T>
  ): CreateRequestBuilder<SalesAutomaticSalesDocumentLineCharges<T>, T> {
    return new CreateRequestBuilder<
      SalesAutomaticSalesDocumentLineCharges<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SalesAutomaticSalesDocumentLineCharges` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesAutomaticSalesDocumentLineCharges.dataAreaId}.
   * @param description Key property. See {@link SalesAutomaticSalesDocumentLineCharges.description}.
   * @param lineNumber Key property. See {@link SalesAutomaticSalesDocumentLineCharges.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `SalesAutomaticSalesDocumentLineCharges` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    description: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<SalesAutomaticSalesDocumentLineCharges<T>, T> {
    return new GetByKeyRequestBuilder<
      SalesAutomaticSalesDocumentLineCharges<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Description: description,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesAutomaticSalesDocumentLineCharges`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesAutomaticSalesDocumentLineCharges`.
   */
  update(
    entity: SalesAutomaticSalesDocumentLineCharges<T>
  ): UpdateRequestBuilder<SalesAutomaticSalesDocumentLineCharges<T>, T> {
    return new UpdateRequestBuilder<
      SalesAutomaticSalesDocumentLineCharges<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesAutomaticSalesDocumentLineCharges`.
   * @param dataAreaId Key property. See {@link SalesAutomaticSalesDocumentLineCharges.dataAreaId}.
   * @param description Key property. See {@link SalesAutomaticSalesDocumentLineCharges.description}.
   * @param lineNumber Key property. See {@link SalesAutomaticSalesDocumentLineCharges.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SalesAutomaticSalesDocumentLineCharges`.
   */
  delete(
    dataAreaId: string,
    description: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<SalesAutomaticSalesDocumentLineCharges<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesAutomaticSalesDocumentLineCharges`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesAutomaticSalesDocumentLineCharges` by taking the entity as a parameter.
   */
  delete(
    entity: SalesAutomaticSalesDocumentLineCharges<T>
  ): DeleteRequestBuilder<SalesAutomaticSalesDocumentLineCharges<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    description?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<SalesAutomaticSalesDocumentLineCharges<T>, T> {
    return new DeleteRequestBuilder<
      SalesAutomaticSalesDocumentLineCharges<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesAutomaticSalesDocumentLineCharges
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Description: description!,
            LineNumber: lineNumber!
          }
    );
  }
}
