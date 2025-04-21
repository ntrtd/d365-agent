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
import { WithholdComponents } from './WithholdComponents';
import { TaxWithholdTypeIn } from './TaxWithholdTypeIn';

/**
 * Request builder class for operations supported on the {@link WithholdComponents} entity.
 */
export class WithholdComponentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WithholdComponents<T>, T> {
  /**
   * Returns a request builder for querying all `WithholdComponents` entities.
   * @returns A request builder for creating requests to retrieve all `WithholdComponents` entities.
   */
  getAll(): GetAllRequestBuilder<WithholdComponents<T>, T> {
    return new GetAllRequestBuilder<WithholdComponents<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WithholdComponents` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WithholdComponents`.
   */
  create(
    entity: WithholdComponents<T>
  ): CreateRequestBuilder<WithholdComponents<T>, T> {
    return new CreateRequestBuilder<WithholdComponents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WithholdComponents` entity based on its keys.
   * @param dataAreaId Key property. See {@link WithholdComponents.dataAreaId}.
   * @param taxType Key property. See {@link WithholdComponents.taxType}.
   * @param withholingTaxComponent Key property. See {@link WithholdComponents.withholingTaxComponent}.
   * @returns A request builder for creating requests to retrieve one `WithholdComponents` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TaxWithholdType_IN'
    >,
    withholingTaxComponent: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WithholdComponents<T>, T> {
    return new GetByKeyRequestBuilder<WithholdComponents<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TaxType: taxType,
        WithholingTaxComponent: withholingTaxComponent
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WithholdComponents`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WithholdComponents`.
   */
  update(
    entity: WithholdComponents<T>
  ): UpdateRequestBuilder<WithholdComponents<T>, T> {
    return new UpdateRequestBuilder<WithholdComponents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WithholdComponents`.
   * @param dataAreaId Key property. See {@link WithholdComponents.dataAreaId}.
   * @param taxType Key property. See {@link WithholdComponents.taxType}.
   * @param withholingTaxComponent Key property. See {@link WithholdComponents.withholingTaxComponent}.
   * @returns A request builder for creating requests that delete an entity of type `WithholdComponents`.
   */
  delete(
    dataAreaId: string,
    taxType: TaxWithholdTypeIn,
    withholingTaxComponent: string
  ): DeleteRequestBuilder<WithholdComponents<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WithholdComponents`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WithholdComponents` by taking the entity as a parameter.
   */
  delete(
    entity: WithholdComponents<T>
  ): DeleteRequestBuilder<WithholdComponents<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxType?: TaxWithholdTypeIn,
    withholingTaxComponent?: string
  ): DeleteRequestBuilder<WithholdComponents<T>, T> {
    return new DeleteRequestBuilder<WithholdComponents<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WithholdComponents
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxType: taxType!,
            WithholingTaxComponent: withholingTaxComponent!
          }
    );
  }
}
