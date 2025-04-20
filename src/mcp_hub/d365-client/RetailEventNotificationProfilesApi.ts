/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailEventNotificationProfiles } from './RetailEventNotificationProfiles';
import { RetailEventNotificationProfilesRequestBuilder } from './RetailEventNotificationProfilesRequestBuilder';
import { OnlineChannelV2SApi } from './OnlineChannelV2SApi';
import { RetailCallCentersApi } from './RetailCallCentersApi';
import { OnlineChannelsApi } from './OnlineChannelsApi';
import { RetailStoresApi } from './RetailStoresApi';
import { NoYes } from './NoYes';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailEventNotificationProfilesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailEventNotificationProfiles<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): RetailEventNotificationProfilesApi<DeSerializersT> {
    return new RetailEventNotificationProfilesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link onlineChannelV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL_V_2: OneToManyLink<
      RetailEventNotificationProfiles<DeSerializersT>,
      DeSerializersT,
      OnlineChannelV2SApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCallCenter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CALL_CENTER: OneToManyLink<
      RetailEventNotificationProfiles<DeSerializersT>,
      DeSerializersT,
      RetailCallCentersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link onlineChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL: OneToManyLink<
      RetailEventNotificationProfiles<DeSerializersT>,
      DeSerializersT,
      OnlineChannelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToManyLink<
      RetailEventNotificationProfiles<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OnlineChannelV2SApi<DeSerializersT>,
      RetailCallCentersApi<DeSerializersT>,
      OnlineChannelsApi<DeSerializersT>,
      RetailStoresApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ONLINE_CHANNEL_V_2: new OneToManyLink(
        'OnlineChannelV2',
        this,
        linkedApis[0]
      ),
      RETAIL_CALL_CENTER: new OneToManyLink(
        'RetailCallCenter',
        this,
        linkedApis[1]
      ),
      ONLINE_CHANNEL: new OneToManyLink('OnlineChannel', this, linkedApis[2]),
      RETAIL_STORE: new OneToManyLink('RetailStore', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = RetailEventNotificationProfiles;

  requestBuilder(): RetailEventNotificationProfilesRequestBuilder<DeSerializersT> {
    return new RetailEventNotificationProfilesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailEventNotificationProfiles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailEventNotificationProfiles<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailEventNotificationProfiles<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof RetailEventNotificationProfiles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailEventNotificationProfiles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailEventNotificationProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROFILE_ID: OrderableEdmTypeField<
      RetailEventNotificationProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACTIVE: EnumField<
      RetailEventNotificationProfiles<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailEventNotificationProfiles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link onlineChannelV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL_V_2: OneToManyLink<
      RetailEventNotificationProfiles<DeSerializersT>,
      DeSerializersT,
      OnlineChannelV2SApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailCallCenter} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CALL_CENTER: OneToManyLink<
      RetailEventNotificationProfiles<DeSerializersT>,
      DeSerializersT,
      RetailCallCentersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link onlineChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL: OneToManyLink<
      RetailEventNotificationProfiles<DeSerializersT>,
      DeSerializersT,
      OnlineChannelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToManyLink<
      RetailEventNotificationProfiles<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailEventNotificationProfiles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link profileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'ProfileId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link active} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE: fieldBuilder.buildEnumField('Active', NoYes, true),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailEventNotificationProfiles)
      };
    }

    return this._schema;
  }
}
