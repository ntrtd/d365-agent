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
import { VendAdvancedInvoices } from './VendAdvancedInvoices';

/**
 * Request builder class for operations supported on the {@link VendAdvancedInvoices} entity.
 */
export class VendAdvancedInvoicesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendAdvancedInvoices<T>, T> {
  /**
   * Returns a request builder for querying all `VendAdvancedInvoices` entities.
   * @returns A request builder for creating requests to retrieve all `VendAdvancedInvoices` entities.
   */
  getAll(): GetAllRequestBuilder<VendAdvancedInvoices<T>, T> {
    return new GetAllRequestBuilder<VendAdvancedInvoices<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendAdvancedInvoices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendAdvancedInvoices`.
   */
  create(
    entity: VendAdvancedInvoices<T>
  ): CreateRequestBuilder<VendAdvancedInvoices<T>, T> {
    return new CreateRequestBuilder<VendAdvancedInvoices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendAdvancedInvoices` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendAdvancedInvoices.dataAreaId}.
   * @param headId Key property. See {@link VendAdvancedInvoices.headId}.
   * @param lineNum Key property. See {@link VendAdvancedInvoices.lineNum}.
   * @returns A request builder for creating requests to retrieve one `VendAdvancedInvoices` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    headId: DeserializedType<T, 'Edm.Guid'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<VendAdvancedInvoices<T>, T> {
    return new GetByKeyRequestBuilder<VendAdvancedInvoices<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        HeadId: headId,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendAdvancedInvoices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendAdvancedInvoices`.
   */
  update(
    entity: VendAdvancedInvoices<T>
  ): UpdateRequestBuilder<VendAdvancedInvoices<T>, T> {
    return new UpdateRequestBuilder<VendAdvancedInvoices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendAdvancedInvoices`.
   * @param dataAreaId Key property. See {@link VendAdvancedInvoices.dataAreaId}.
   * @param headId Key property. See {@link VendAdvancedInvoices.headId}.
   * @param lineNum Key property. See {@link VendAdvancedInvoices.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `VendAdvancedInvoices`.
   */
  delete(
    dataAreaId: string,
    headId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<VendAdvancedInvoices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendAdvancedInvoices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendAdvancedInvoices` by taking the entity as a parameter.
   */
  delete(
    entity: VendAdvancedInvoices<T>
  ): DeleteRequestBuilder<VendAdvancedInvoices<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    headId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<VendAdvancedInvoices<T>, T> {
    return new DeleteRequestBuilder<VendAdvancedInvoices<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendAdvancedInvoices
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            HeadId: headId!,
            LineNum: lineNum!
          }
    );
  }
}
