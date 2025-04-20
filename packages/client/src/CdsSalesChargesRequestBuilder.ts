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
import { CdsSalesCharges } from './CdsSalesCharges';

/**
 * Request builder class for operations supported on the {@link CdsSalesCharges} entity.
 */
export class CdsSalesChargesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsSalesCharges<T>, T> {
  /**
   * Returns a request builder for querying all `CdsSalesCharges` entities.
   * @returns A request builder for creating requests to retrieve all `CdsSalesCharges` entities.
   */
  getAll(): GetAllRequestBuilder<CdsSalesCharges<T>, T> {
    return new GetAllRequestBuilder<CdsSalesCharges<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CdsSalesCharges` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsSalesCharges`.
   */
  create(
    entity: CdsSalesCharges<T>
  ): CreateRequestBuilder<CdsSalesCharges<T>, T> {
    return new CreateRequestBuilder<CdsSalesCharges<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsSalesCharges` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsSalesCharges.dataAreaId}.
   * @param chargeCode Key property. See {@link CdsSalesCharges.chargeCode}.
   * @returns A request builder for creating requests to retrieve one `CdsSalesCharges` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    chargeCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CdsSalesCharges<T>, T> {
    return new GetByKeyRequestBuilder<CdsSalesCharges<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ChargeCode: chargeCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CdsSalesCharges`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsSalesCharges`.
   */
  update(
    entity: CdsSalesCharges<T>
  ): UpdateRequestBuilder<CdsSalesCharges<T>, T> {
    return new UpdateRequestBuilder<CdsSalesCharges<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsSalesCharges`.
   * @param dataAreaId Key property. See {@link CdsSalesCharges.dataAreaId}.
   * @param chargeCode Key property. See {@link CdsSalesCharges.chargeCode}.
   * @returns A request builder for creating requests that delete an entity of type `CdsSalesCharges`.
   */
  delete(
    dataAreaId: string,
    chargeCode: string
  ): DeleteRequestBuilder<CdsSalesCharges<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsSalesCharges`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsSalesCharges` by taking the entity as a parameter.
   */
  delete(
    entity: CdsSalesCharges<T>
  ): DeleteRequestBuilder<CdsSalesCharges<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    chargeCode?: string
  ): DeleteRequestBuilder<CdsSalesCharges<T>, T> {
    return new DeleteRequestBuilder<CdsSalesCharges<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsSalesCharges
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ChargeCode: chargeCode!
          }
    );
  }
}
