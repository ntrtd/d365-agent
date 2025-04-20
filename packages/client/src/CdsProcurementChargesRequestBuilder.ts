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
import { CdsProcurementCharges } from './CdsProcurementCharges';

/**
 * Request builder class for operations supported on the {@link CdsProcurementCharges} entity.
 */
export class CdsProcurementChargesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsProcurementCharges<T>, T> {
  /**
   * Returns a request builder for querying all `CdsProcurementCharges` entities.
   * @returns A request builder for creating requests to retrieve all `CdsProcurementCharges` entities.
   */
  getAll(): GetAllRequestBuilder<CdsProcurementCharges<T>, T> {
    return new GetAllRequestBuilder<CdsProcurementCharges<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsProcurementCharges` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsProcurementCharges`.
   */
  create(
    entity: CdsProcurementCharges<T>
  ): CreateRequestBuilder<CdsProcurementCharges<T>, T> {
    return new CreateRequestBuilder<CdsProcurementCharges<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsProcurementCharges` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsProcurementCharges.dataAreaId}.
   * @param chargeCode Key property. See {@link CdsProcurementCharges.chargeCode}.
   * @returns A request builder for creating requests to retrieve one `CdsProcurementCharges` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    chargeCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CdsProcurementCharges<T>, T> {
    return new GetByKeyRequestBuilder<CdsProcurementCharges<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ChargeCode: chargeCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsProcurementCharges`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsProcurementCharges`.
   */
  update(
    entity: CdsProcurementCharges<T>
  ): UpdateRequestBuilder<CdsProcurementCharges<T>, T> {
    return new UpdateRequestBuilder<CdsProcurementCharges<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsProcurementCharges`.
   * @param dataAreaId Key property. See {@link CdsProcurementCharges.dataAreaId}.
   * @param chargeCode Key property. See {@link CdsProcurementCharges.chargeCode}.
   * @returns A request builder for creating requests that delete an entity of type `CdsProcurementCharges`.
   */
  delete(
    dataAreaId: string,
    chargeCode: string
  ): DeleteRequestBuilder<CdsProcurementCharges<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsProcurementCharges`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsProcurementCharges` by taking the entity as a parameter.
   */
  delete(
    entity: CdsProcurementCharges<T>
  ): DeleteRequestBuilder<CdsProcurementCharges<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    chargeCode?: string
  ): DeleteRequestBuilder<CdsProcurementCharges<T>, T> {
    return new DeleteRequestBuilder<CdsProcurementCharges<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsProcurementCharges
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ChargeCode: chargeCode!
          }
    );
  }
}
