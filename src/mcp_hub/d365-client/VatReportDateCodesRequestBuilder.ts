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
import { VatReportDateCodes } from './VatReportDateCodes';

/**
 * Request builder class for operations supported on the {@link VatReportDateCodes} entity.
 */
export class VatReportDateCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VatReportDateCodes<T>, T> {
  /**
   * Returns a request builder for querying all `VatReportDateCodes` entities.
   * @returns A request builder for creating requests to retrieve all `VatReportDateCodes` entities.
   */
  getAll(): GetAllRequestBuilder<VatReportDateCodes<T>, T> {
    return new GetAllRequestBuilder<VatReportDateCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VatReportDateCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VatReportDateCodes`.
   */
  create(
    entity: VatReportDateCodes<T>
  ): CreateRequestBuilder<VatReportDateCodes<T>, T> {
    return new CreateRequestBuilder<VatReportDateCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VatReportDateCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link VatReportDateCodes.dataAreaId}.
   * @param vatReportDateCode Key property. See {@link VatReportDateCodes.vatReportDateCode}.
   * @returns A request builder for creating requests to retrieve one `VatReportDateCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vatReportDateCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VatReportDateCodes<T>, T> {
    return new GetByKeyRequestBuilder<VatReportDateCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        VATReportDateCode: vatReportDateCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VatReportDateCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VatReportDateCodes`.
   */
  update(
    entity: VatReportDateCodes<T>
  ): UpdateRequestBuilder<VatReportDateCodes<T>, T> {
    return new UpdateRequestBuilder<VatReportDateCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VatReportDateCodes`.
   * @param dataAreaId Key property. See {@link VatReportDateCodes.dataAreaId}.
   * @param vatReportDateCode Key property. See {@link VatReportDateCodes.vatReportDateCode}.
   * @returns A request builder for creating requests that delete an entity of type `VatReportDateCodes`.
   */
  delete(
    dataAreaId: string,
    vatReportDateCode: string
  ): DeleteRequestBuilder<VatReportDateCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VatReportDateCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VatReportDateCodes` by taking the entity as a parameter.
   */
  delete(
    entity: VatReportDateCodes<T>
  ): DeleteRequestBuilder<VatReportDateCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vatReportDateCode?: string
  ): DeleteRequestBuilder<VatReportDateCodes<T>, T> {
    return new DeleteRequestBuilder<VatReportDateCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VatReportDateCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VATReportDateCode: vatReportDateCode!
          }
    );
  }
}
