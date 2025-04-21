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
import { WithholdReportVouchers } from './WithholdReportVouchers';

/**
 * Request builder class for operations supported on the {@link WithholdReportVouchers} entity.
 */
export class WithholdReportVouchersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WithholdReportVouchers<T>, T> {
  /**
   * Returns a request builder for querying all `WithholdReportVouchers` entities.
   * @returns A request builder for creating requests to retrieve all `WithholdReportVouchers` entities.
   */
  getAll(): GetAllRequestBuilder<WithholdReportVouchers<T>, T> {
    return new GetAllRequestBuilder<WithholdReportVouchers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WithholdReportVouchers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WithholdReportVouchers`.
   */
  create(
    entity: WithholdReportVouchers<T>
  ): CreateRequestBuilder<WithholdReportVouchers<T>, T> {
    return new CreateRequestBuilder<WithholdReportVouchers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WithholdReportVouchers` entity based on its keys.
   * @param dataAreaId Key property. See {@link WithholdReportVouchers.dataAreaId}.
   * @param voucher Key property. See {@link WithholdReportVouchers.voucher}.
   * @returns A request builder for creating requests to retrieve one `WithholdReportVouchers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    voucher: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WithholdReportVouchers<T>, T> {
    return new GetByKeyRequestBuilder<WithholdReportVouchers<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Voucher: voucher
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WithholdReportVouchers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WithholdReportVouchers`.
   */
  update(
    entity: WithholdReportVouchers<T>
  ): UpdateRequestBuilder<WithholdReportVouchers<T>, T> {
    return new UpdateRequestBuilder<WithholdReportVouchers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WithholdReportVouchers`.
   * @param dataAreaId Key property. See {@link WithholdReportVouchers.dataAreaId}.
   * @param voucher Key property. See {@link WithholdReportVouchers.voucher}.
   * @returns A request builder for creating requests that delete an entity of type `WithholdReportVouchers`.
   */
  delete(
    dataAreaId: string,
    voucher: string
  ): DeleteRequestBuilder<WithholdReportVouchers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WithholdReportVouchers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WithholdReportVouchers` by taking the entity as a parameter.
   */
  delete(
    entity: WithholdReportVouchers<T>
  ): DeleteRequestBuilder<WithholdReportVouchers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    voucher?: string
  ): DeleteRequestBuilder<WithholdReportVouchers<T>, T> {
    return new DeleteRequestBuilder<WithholdReportVouchers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WithholdReportVouchers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Voucher: voucher!
          }
    );
  }
}
