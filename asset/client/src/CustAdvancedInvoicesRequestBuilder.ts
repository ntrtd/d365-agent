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
import { CustAdvancedInvoices } from './CustAdvancedInvoices';

/**
 * Request builder class for operations supported on the {@link CustAdvancedInvoices} entity.
 */
export class CustAdvancedInvoicesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustAdvancedInvoices<T>, T> {
  /**
   * Returns a request builder for querying all `CustAdvancedInvoices` entities.
   * @returns A request builder for creating requests to retrieve all `CustAdvancedInvoices` entities.
   */
  getAll(): GetAllRequestBuilder<CustAdvancedInvoices<T>, T> {
    return new GetAllRequestBuilder<CustAdvancedInvoices<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustAdvancedInvoices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustAdvancedInvoices`.
   */
  create(
    entity: CustAdvancedInvoices<T>
  ): CreateRequestBuilder<CustAdvancedInvoices<T>, T> {
    return new CreateRequestBuilder<CustAdvancedInvoices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustAdvancedInvoices` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustAdvancedInvoices.dataAreaId}.
   * @param headId Key property. See {@link CustAdvancedInvoices.headId}.
   * @param lineNum Key property. See {@link CustAdvancedInvoices.lineNum}.
   * @returns A request builder for creating requests to retrieve one `CustAdvancedInvoices` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    headId: DeserializedType<T, 'Edm.Guid'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<CustAdvancedInvoices<T>, T> {
    return new GetByKeyRequestBuilder<CustAdvancedInvoices<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        HeadId: headId,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustAdvancedInvoices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustAdvancedInvoices`.
   */
  update(
    entity: CustAdvancedInvoices<T>
  ): UpdateRequestBuilder<CustAdvancedInvoices<T>, T> {
    return new UpdateRequestBuilder<CustAdvancedInvoices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustAdvancedInvoices`.
   * @param dataAreaId Key property. See {@link CustAdvancedInvoices.dataAreaId}.
   * @param headId Key property. See {@link CustAdvancedInvoices.headId}.
   * @param lineNum Key property. See {@link CustAdvancedInvoices.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `CustAdvancedInvoices`.
   */
  delete(
    dataAreaId: string,
    headId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<CustAdvancedInvoices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustAdvancedInvoices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustAdvancedInvoices` by taking the entity as a parameter.
   */
  delete(
    entity: CustAdvancedInvoices<T>
  ): DeleteRequestBuilder<CustAdvancedInvoices<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    headId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<CustAdvancedInvoices<T>, T> {
    return new DeleteRequestBuilder<CustAdvancedInvoices<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustAdvancedInvoices
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            HeadId: headId!,
            LineNum: lineNum!
          }
    );
  }
}
