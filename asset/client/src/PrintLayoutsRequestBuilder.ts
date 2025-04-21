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
import { PrintLayouts } from './PrintLayouts';
import { LedgerPreprintVoucherCn } from './LedgerPreprintVoucherCn';

/**
 * Request builder class for operations supported on the {@link PrintLayouts} entity.
 */
export class PrintLayoutsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PrintLayouts<T>, T> {
  /**
   * Returns a request builder for querying all `PrintLayouts` entities.
   * @returns A request builder for creating requests to retrieve all `PrintLayouts` entities.
   */
  getAll(): GetAllRequestBuilder<PrintLayouts<T>, T> {
    return new GetAllRequestBuilder<PrintLayouts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PrintLayouts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PrintLayouts`.
   */
  create(entity: PrintLayouts<T>): CreateRequestBuilder<PrintLayouts<T>, T> {
    return new CreateRequestBuilder<PrintLayouts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PrintLayouts` entity based on its keys.
   * @param dataAreaId Key property. See {@link PrintLayouts.dataAreaId}.
   * @param printLayoutGroup Key property. See {@link PrintLayouts.printLayoutGroup}.
   * @param printLayoutCode Key property. See {@link PrintLayouts.printLayoutCode}.
   * @returns A request builder for creating requests to retrieve one `PrintLayouts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    printLayoutGroup: DeserializedType<T, 'Edm.String'>,
    printLayoutCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LedgerPreprintVoucher_CN'
    >
  ): GetByKeyRequestBuilder<PrintLayouts<T>, T> {
    return new GetByKeyRequestBuilder<PrintLayouts<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PrintLayoutGroup: printLayoutGroup,
      PrintLayoutCode: printLayoutCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PrintLayouts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PrintLayouts`.
   */
  update(entity: PrintLayouts<T>): UpdateRequestBuilder<PrintLayouts<T>, T> {
    return new UpdateRequestBuilder<PrintLayouts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PrintLayouts`.
   * @param dataAreaId Key property. See {@link PrintLayouts.dataAreaId}.
   * @param printLayoutGroup Key property. See {@link PrintLayouts.printLayoutGroup}.
   * @param printLayoutCode Key property. See {@link PrintLayouts.printLayoutCode}.
   * @returns A request builder for creating requests that delete an entity of type `PrintLayouts`.
   */
  delete(
    dataAreaId: string,
    printLayoutGroup: string,
    printLayoutCode: LedgerPreprintVoucherCn
  ): DeleteRequestBuilder<PrintLayouts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PrintLayouts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PrintLayouts` by taking the entity as a parameter.
   */
  delete(entity: PrintLayouts<T>): DeleteRequestBuilder<PrintLayouts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    printLayoutGroup?: string,
    printLayoutCode?: LedgerPreprintVoucherCn
  ): DeleteRequestBuilder<PrintLayouts<T>, T> {
    return new DeleteRequestBuilder<PrintLayouts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PrintLayouts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PrintLayoutGroup: printLayoutGroup!,
            PrintLayoutCode: printLayoutCode!
          }
    );
  }
}
