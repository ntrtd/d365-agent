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
import { VendorInvoiceHeaderCharges } from './VendorInvoiceHeaderCharges';

/**
 * Request builder class for operations supported on the {@link VendorInvoiceHeaderCharges} entity.
 */
export class VendorInvoiceHeaderChargesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorInvoiceHeaderCharges<T>, T> {
  /**
   * Returns a request builder for querying all `VendorInvoiceHeaderCharges` entities.
   * @returns A request builder for creating requests to retrieve all `VendorInvoiceHeaderCharges` entities.
   */
  getAll(): GetAllRequestBuilder<VendorInvoiceHeaderCharges<T>, T> {
    return new GetAllRequestBuilder<VendorInvoiceHeaderCharges<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorInvoiceHeaderCharges` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorInvoiceHeaderCharges`.
   */
  create(
    entity: VendorInvoiceHeaderCharges<T>
  ): CreateRequestBuilder<VendorInvoiceHeaderCharges<T>, T> {
    return new CreateRequestBuilder<VendorInvoiceHeaderCharges<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorInvoiceHeaderCharges` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorInvoiceHeaderCharges.dataAreaId}.
   * @param headerReference Key property. See {@link VendorInvoiceHeaderCharges.headerReference}.
   * @param chargeLineNumber Key property. See {@link VendorInvoiceHeaderCharges.chargeLineNumber}.
   * @param vendInvoiceInfoTableDataAreaId Key property. See {@link VendorInvoiceHeaderCharges.vendInvoiceInfoTableDataAreaId}.
   * @returns A request builder for creating requests to retrieve one `VendorInvoiceHeaderCharges` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    headerReference: DeserializedType<T, 'Edm.String'>,
    chargeLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    vendInvoiceInfoTableDataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorInvoiceHeaderCharges<T>, T> {
    return new GetByKeyRequestBuilder<VendorInvoiceHeaderCharges<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        HeaderReference: headerReference,
        ChargeLineNumber: chargeLineNumber,
        VendInvoiceInfoTableDataAreaId: vendInvoiceInfoTableDataAreaId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorInvoiceHeaderCharges`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorInvoiceHeaderCharges`.
   */
  update(
    entity: VendorInvoiceHeaderCharges<T>
  ): UpdateRequestBuilder<VendorInvoiceHeaderCharges<T>, T> {
    return new UpdateRequestBuilder<VendorInvoiceHeaderCharges<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorInvoiceHeaderCharges`.
   * @param dataAreaId Key property. See {@link VendorInvoiceHeaderCharges.dataAreaId}.
   * @param headerReference Key property. See {@link VendorInvoiceHeaderCharges.headerReference}.
   * @param chargeLineNumber Key property. See {@link VendorInvoiceHeaderCharges.chargeLineNumber}.
   * @param vendInvoiceInfoTableDataAreaId Key property. See {@link VendorInvoiceHeaderCharges.vendInvoiceInfoTableDataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `VendorInvoiceHeaderCharges`.
   */
  delete(
    dataAreaId: string,
    headerReference: string,
    chargeLineNumber: BigNumber,
    vendInvoiceInfoTableDataAreaId: string
  ): DeleteRequestBuilder<VendorInvoiceHeaderCharges<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorInvoiceHeaderCharges`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorInvoiceHeaderCharges` by taking the entity as a parameter.
   */
  delete(
    entity: VendorInvoiceHeaderCharges<T>
  ): DeleteRequestBuilder<VendorInvoiceHeaderCharges<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    headerReference?: string,
    chargeLineNumber?: BigNumber,
    vendInvoiceInfoTableDataAreaId?: string
  ): DeleteRequestBuilder<VendorInvoiceHeaderCharges<T>, T> {
    return new DeleteRequestBuilder<VendorInvoiceHeaderCharges<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorInvoiceHeaderCharges
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            HeaderReference: headerReference!,
            ChargeLineNumber: chargeLineNumber!,
            VendInvoiceInfoTableDataAreaId: vendInvoiceInfoTableDataAreaId!
          }
    );
  }
}
