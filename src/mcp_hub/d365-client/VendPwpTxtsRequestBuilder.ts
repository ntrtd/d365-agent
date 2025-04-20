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
import { VendPwpTxts } from './VendPwpTxts';
import { TableGroupAll } from './TableGroupAll';

/**
 * Request builder class for operations supported on the {@link VendPwpTxts} entity.
 */
export class VendPwpTxtsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendPwpTxts<T>, T> {
  /**
   * Returns a request builder for querying all `VendPwpTxts` entities.
   * @returns A request builder for creating requests to retrieve all `VendPwpTxts` entities.
   */
  getAll(): GetAllRequestBuilder<VendPwpTxts<T>, T> {
    return new GetAllRequestBuilder<VendPwpTxts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendPwpTxts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendPwpTxts`.
   */
  create(entity: VendPwpTxts<T>): CreateRequestBuilder<VendPwpTxts<T>, T> {
    return new CreateRequestBuilder<VendPwpTxts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `VendPwpTxts` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendPwpTxts.dataAreaId}.
   * @param accountCode Key property. See {@link VendPwpTxts.accountCode}.
   * @param vendorGroup Key property. See {@link VendPwpTxts.vendorGroup}.
   * @returns A request builder for creating requests to retrieve one `VendPwpTxts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    vendorGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendPwpTxts<T>, T> {
    return new GetByKeyRequestBuilder<VendPwpTxts<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AccountCode: accountCode,
      VendorGroup: vendorGroup
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VendPwpTxts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendPwpTxts`.
   */
  update(entity: VendPwpTxts<T>): UpdateRequestBuilder<VendPwpTxts<T>, T> {
    return new UpdateRequestBuilder<VendPwpTxts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `VendPwpTxts`.
   * @param dataAreaId Key property. See {@link VendPwpTxts.dataAreaId}.
   * @param accountCode Key property. See {@link VendPwpTxts.accountCode}.
   * @param vendorGroup Key property. See {@link VendPwpTxts.vendorGroup}.
   * @returns A request builder for creating requests that delete an entity of type `VendPwpTxts`.
   */
  delete(
    dataAreaId: string,
    accountCode: TableGroupAll,
    vendorGroup: string
  ): DeleteRequestBuilder<VendPwpTxts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendPwpTxts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendPwpTxts` by taking the entity as a parameter.
   */
  delete(entity: VendPwpTxts<T>): DeleteRequestBuilder<VendPwpTxts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountCode?: TableGroupAll,
    vendorGroup?: string
  ): DeleteRequestBuilder<VendPwpTxts<T>, T> {
    return new DeleteRequestBuilder<VendPwpTxts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendPwpTxts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountCode: accountCode!,
            VendorGroup: vendorGroup!
          }
    );
  }
}
