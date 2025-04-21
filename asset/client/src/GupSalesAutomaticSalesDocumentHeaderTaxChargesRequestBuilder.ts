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
import { GupSalesAutomaticSalesDocumentHeaderTaxCharges } from './GupSalesAutomaticSalesDocumentHeaderTaxCharges';

/**
 * Request builder class for operations supported on the {@link GupSalesAutomaticSalesDocumentHeaderTaxCharges} entity.
 */
export class GupSalesAutomaticSalesDocumentHeaderTaxChargesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GupSalesAutomaticSalesDocumentHeaderTaxCharges<T>, T> {
  /**
   * Returns a request builder for querying all `GupSalesAutomaticSalesDocumentHeaderTaxCharges` entities.
   * @returns A request builder for creating requests to retrieve all `GupSalesAutomaticSalesDocumentHeaderTaxCharges` entities.
   */
  getAll(): GetAllRequestBuilder<
    GupSalesAutomaticSalesDocumentHeaderTaxCharges<T>,
    T
  > {
    return new GetAllRequestBuilder<
      GupSalesAutomaticSalesDocumentHeaderTaxCharges<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `GupSalesAutomaticSalesDocumentHeaderTaxCharges` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GupSalesAutomaticSalesDocumentHeaderTaxCharges`.
   */
  create(
    entity: GupSalesAutomaticSalesDocumentHeaderTaxCharges<T>
  ): CreateRequestBuilder<
    GupSalesAutomaticSalesDocumentHeaderTaxCharges<T>,
    T
  > {
    return new CreateRequestBuilder<
      GupSalesAutomaticSalesDocumentHeaderTaxCharges<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `GupSalesAutomaticSalesDocumentHeaderTaxCharges` entity based on its keys.
   * @param dataAreaId Key property. See {@link GupSalesAutomaticSalesDocumentHeaderTaxCharges.dataAreaId}.
   * @param description Key property. See {@link GupSalesAutomaticSalesDocumentHeaderTaxCharges.description}.
   * @param lineNum Key property. See {@link GupSalesAutomaticSalesDocumentHeaderTaxCharges.lineNum}.
   * @param taxCode Key property. See {@link GupSalesAutomaticSalesDocumentHeaderTaxCharges.taxCode}.
   * @returns A request builder for creating requests to retrieve one `GupSalesAutomaticSalesDocumentHeaderTaxCharges` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    description: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>,
    taxCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    GupSalesAutomaticSalesDocumentHeaderTaxCharges<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      GupSalesAutomaticSalesDocumentHeaderTaxCharges<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Description: description,
      LineNum: lineNum,
      TaxCode: taxCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `GupSalesAutomaticSalesDocumentHeaderTaxCharges`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GupSalesAutomaticSalesDocumentHeaderTaxCharges`.
   */
  update(
    entity: GupSalesAutomaticSalesDocumentHeaderTaxCharges<T>
  ): UpdateRequestBuilder<
    GupSalesAutomaticSalesDocumentHeaderTaxCharges<T>,
    T
  > {
    return new UpdateRequestBuilder<
      GupSalesAutomaticSalesDocumentHeaderTaxCharges<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `GupSalesAutomaticSalesDocumentHeaderTaxCharges`.
   * @param dataAreaId Key property. See {@link GupSalesAutomaticSalesDocumentHeaderTaxCharges.dataAreaId}.
   * @param description Key property. See {@link GupSalesAutomaticSalesDocumentHeaderTaxCharges.description}.
   * @param lineNum Key property. See {@link GupSalesAutomaticSalesDocumentHeaderTaxCharges.lineNum}.
   * @param taxCode Key property. See {@link GupSalesAutomaticSalesDocumentHeaderTaxCharges.taxCode}.
   * @returns A request builder for creating requests that delete an entity of type `GupSalesAutomaticSalesDocumentHeaderTaxCharges`.
   */
  delete(
    dataAreaId: string,
    description: string,
    lineNum: BigNumber,
    taxCode: string
  ): DeleteRequestBuilder<GupSalesAutomaticSalesDocumentHeaderTaxCharges<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GupSalesAutomaticSalesDocumentHeaderTaxCharges`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GupSalesAutomaticSalesDocumentHeaderTaxCharges` by taking the entity as a parameter.
   */
  delete(
    entity: GupSalesAutomaticSalesDocumentHeaderTaxCharges<T>
  ): DeleteRequestBuilder<GupSalesAutomaticSalesDocumentHeaderTaxCharges<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    description?: string,
    lineNum?: BigNumber,
    taxCode?: string
  ): DeleteRequestBuilder<
    GupSalesAutomaticSalesDocumentHeaderTaxCharges<T>,
    T
  > {
    return new DeleteRequestBuilder<
      GupSalesAutomaticSalesDocumentHeaderTaxCharges<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      GupSalesAutomaticSalesDocumentHeaderTaxCharges
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Description: description!,
            LineNum: lineNum!,
            TaxCode: taxCode!
          }
    );
  }
}
