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
import { VendorPaymentFineCodes } from './VendorPaymentFineCodes';

/**
 * Request builder class for operations supported on the {@link VendorPaymentFineCodes} entity.
 */
export class VendorPaymentFineCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorPaymentFineCodes<T>, T> {
  /**
   * Returns a request builder for querying all `VendorPaymentFineCodes` entities.
   * @returns A request builder for creating requests to retrieve all `VendorPaymentFineCodes` entities.
   */
  getAll(): GetAllRequestBuilder<VendorPaymentFineCodes<T>, T> {
    return new GetAllRequestBuilder<VendorPaymentFineCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorPaymentFineCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorPaymentFineCodes`.
   */
  create(
    entity: VendorPaymentFineCodes<T>
  ): CreateRequestBuilder<VendorPaymentFineCodes<T>, T> {
    return new CreateRequestBuilder<VendorPaymentFineCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorPaymentFineCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorPaymentFineCodes.dataAreaId}.
   * @param fineCode Key property. See {@link VendorPaymentFineCodes.fineCode}.
   * @returns A request builder for creating requests to retrieve one `VendorPaymentFineCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fineCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorPaymentFineCodes<T>, T> {
    return new GetByKeyRequestBuilder<VendorPaymentFineCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FineCode: fineCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorPaymentFineCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorPaymentFineCodes`.
   */
  update(
    entity: VendorPaymentFineCodes<T>
  ): UpdateRequestBuilder<VendorPaymentFineCodes<T>, T> {
    return new UpdateRequestBuilder<VendorPaymentFineCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorPaymentFineCodes`.
   * @param dataAreaId Key property. See {@link VendorPaymentFineCodes.dataAreaId}.
   * @param fineCode Key property. See {@link VendorPaymentFineCodes.fineCode}.
   * @returns A request builder for creating requests that delete an entity of type `VendorPaymentFineCodes`.
   */
  delete(
    dataAreaId: string,
    fineCode: string
  ): DeleteRequestBuilder<VendorPaymentFineCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorPaymentFineCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorPaymentFineCodes` by taking the entity as a parameter.
   */
  delete(
    entity: VendorPaymentFineCodes<T>
  ): DeleteRequestBuilder<VendorPaymentFineCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fineCode?: string
  ): DeleteRequestBuilder<VendorPaymentFineCodes<T>, T> {
    return new DeleteRequestBuilder<VendorPaymentFineCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorPaymentFineCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FineCode: fineCode!
          }
    );
  }
}
