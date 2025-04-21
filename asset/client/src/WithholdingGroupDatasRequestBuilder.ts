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
import { WithholdingGroupDatas } from './WithholdingGroupDatas';

/**
 * Request builder class for operations supported on the {@link WithholdingGroupDatas} entity.
 */
export class WithholdingGroupDatasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WithholdingGroupDatas<T>, T> {
  /**
   * Returns a request builder for querying all `WithholdingGroupDatas` entities.
   * @returns A request builder for creating requests to retrieve all `WithholdingGroupDatas` entities.
   */
  getAll(): GetAllRequestBuilder<WithholdingGroupDatas<T>, T> {
    return new GetAllRequestBuilder<WithholdingGroupDatas<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WithholdingGroupDatas` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WithholdingGroupDatas`.
   */
  create(
    entity: WithholdingGroupDatas<T>
  ): CreateRequestBuilder<WithholdingGroupDatas<T>, T> {
    return new CreateRequestBuilder<WithholdingGroupDatas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WithholdingGroupDatas` entity based on its keys.
   * @param dataAreaId Key property. See {@link WithholdingGroupDatas.dataAreaId}.
   * @param withholdingTaxGroupId Key property. See {@link WithholdingGroupDatas.withholdingTaxGroupId}.
   * @param withholdingTaxCodeId Key property. See {@link WithholdingGroupDatas.withholdingTaxCodeId}.
   * @returns A request builder for creating requests to retrieve one `WithholdingGroupDatas` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    withholdingTaxGroupId: DeserializedType<T, 'Edm.String'>,
    withholdingTaxCodeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WithholdingGroupDatas<T>, T> {
    return new GetByKeyRequestBuilder<WithholdingGroupDatas<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        WithholdingTaxGroupId: withholdingTaxGroupId,
        WithholdingTaxCodeId: withholdingTaxCodeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WithholdingGroupDatas`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WithholdingGroupDatas`.
   */
  update(
    entity: WithholdingGroupDatas<T>
  ): UpdateRequestBuilder<WithholdingGroupDatas<T>, T> {
    return new UpdateRequestBuilder<WithholdingGroupDatas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WithholdingGroupDatas`.
   * @param dataAreaId Key property. See {@link WithholdingGroupDatas.dataAreaId}.
   * @param withholdingTaxGroupId Key property. See {@link WithholdingGroupDatas.withholdingTaxGroupId}.
   * @param withholdingTaxCodeId Key property. See {@link WithholdingGroupDatas.withholdingTaxCodeId}.
   * @returns A request builder for creating requests that delete an entity of type `WithholdingGroupDatas`.
   */
  delete(
    dataAreaId: string,
    withholdingTaxGroupId: string,
    withholdingTaxCodeId: string
  ): DeleteRequestBuilder<WithholdingGroupDatas<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WithholdingGroupDatas`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WithholdingGroupDatas` by taking the entity as a parameter.
   */
  delete(
    entity: WithholdingGroupDatas<T>
  ): DeleteRequestBuilder<WithholdingGroupDatas<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    withholdingTaxGroupId?: string,
    withholdingTaxCodeId?: string
  ): DeleteRequestBuilder<WithholdingGroupDatas<T>, T> {
    return new DeleteRequestBuilder<WithholdingGroupDatas<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WithholdingGroupDatas
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            WithholdingTaxGroupId: withholdingTaxGroupId!,
            WithholdingTaxCodeId: withholdingTaxCodeId!
          }
    );
  }
}
