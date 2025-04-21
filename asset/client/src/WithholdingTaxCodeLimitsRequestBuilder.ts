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
import { WithholdingTaxCodeLimits } from './WithholdingTaxCodeLimits';

/**
 * Request builder class for operations supported on the {@link WithholdingTaxCodeLimits} entity.
 */
export class WithholdingTaxCodeLimitsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WithholdingTaxCodeLimits<T>, T> {
  /**
   * Returns a request builder for querying all `WithholdingTaxCodeLimits` entities.
   * @returns A request builder for creating requests to retrieve all `WithholdingTaxCodeLimits` entities.
   */
  getAll(): GetAllRequestBuilder<WithholdingTaxCodeLimits<T>, T> {
    return new GetAllRequestBuilder<WithholdingTaxCodeLimits<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WithholdingTaxCodeLimits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WithholdingTaxCodeLimits`.
   */
  create(
    entity: WithholdingTaxCodeLimits<T>
  ): CreateRequestBuilder<WithholdingTaxCodeLimits<T>, T> {
    return new CreateRequestBuilder<WithholdingTaxCodeLimits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WithholdingTaxCodeLimits` entity based on its keys.
   * @param dataAreaId Key property. See {@link WithholdingTaxCodeLimits.dataAreaId}.
   * @param withholdingTaxCodeId Key property. See {@link WithholdingTaxCodeLimits.withholdingTaxCodeId}.
   * @returns A request builder for creating requests to retrieve one `WithholdingTaxCodeLimits` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    withholdingTaxCodeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WithholdingTaxCodeLimits<T>, T> {
    return new GetByKeyRequestBuilder<WithholdingTaxCodeLimits<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WithholdingTaxCodeId: withholdingTaxCodeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WithholdingTaxCodeLimits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WithholdingTaxCodeLimits`.
   */
  update(
    entity: WithholdingTaxCodeLimits<T>
  ): UpdateRequestBuilder<WithholdingTaxCodeLimits<T>, T> {
    return new UpdateRequestBuilder<WithholdingTaxCodeLimits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WithholdingTaxCodeLimits`.
   * @param dataAreaId Key property. See {@link WithholdingTaxCodeLimits.dataAreaId}.
   * @param withholdingTaxCodeId Key property. See {@link WithholdingTaxCodeLimits.withholdingTaxCodeId}.
   * @returns A request builder for creating requests that delete an entity of type `WithholdingTaxCodeLimits`.
   */
  delete(
    dataAreaId: string,
    withholdingTaxCodeId: string
  ): DeleteRequestBuilder<WithholdingTaxCodeLimits<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WithholdingTaxCodeLimits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WithholdingTaxCodeLimits` by taking the entity as a parameter.
   */
  delete(
    entity: WithholdingTaxCodeLimits<T>
  ): DeleteRequestBuilder<WithholdingTaxCodeLimits<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    withholdingTaxCodeId?: string
  ): DeleteRequestBuilder<WithholdingTaxCodeLimits<T>, T> {
    return new DeleteRequestBuilder<WithholdingTaxCodeLimits<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WithholdingTaxCodeLimits
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WithholdingTaxCodeId: withholdingTaxCodeId!
          }
    );
  }
}
